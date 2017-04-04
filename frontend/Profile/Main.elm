port module Profile.Main exposing (..)

import Http
import Json.Decode as Json
import Models.Ad
import Models.User exposing (User, BusinessCard, PictureEditing)
import Skill
import State.Profile exposing (Model)
import Util exposing (UpdateMessage(..))


type Msg
  = GetMe (Result Http.Error User)
  | GetAds (List Models.Ad.Ad)
  | Save User
  | Edit
  | AllowProfileCreation
  | DomainSkillMessage Int Skill.Msg
  | PositionSkillMessage Int Skill.Msg
  | ChangeDomainSelect String
  | ChangePositionSelect String
  | ChangeLocation String
  | GetDomainOptions (List String)
  | GetPositionOptions (List String)
  | ChangeTitle String
  | ChangeNickname String
  | ChangeDescription String
  | UpdateUser ()
  | UpdateConsent
  | UpdateBusinessCard BusinessCardField String
  | ChangeImage User
  | ImageDetailsUpdate (String ,PictureEditing)
  | MouseEnterProfilePic
  | MouseLeaveProfilePic
  | StartAddContact
  | ChangeContactAddingText String
  | AddContact User
  | NoOp


port imageUpload : Maybe PictureEditing -> Cmd msg

-- cropped picture file name and full picture details
port imageSave : ((String, PictureEditing) -> msg) -> Sub msg

subscriptions : Sub Msg
subscriptions =
  imageSave ImageDetailsUpdate

getMe : Cmd (UpdateMessage Msg)
getMe =
  Http.get "/api/profiilit/oma" Models.User.userDecoder
    |> Http.send (LocalUpdateMessage << GetMe)


getAds : User -> Cmd (UpdateMessage Msg)
getAds u =
  Http.get ("/api/ilmoitukset/tradenomilta/" ++ toString u.id) (Json.list Models.Ad.adDecoder)
    |> Util.errorHandlingSend GetAds


initTasks : Cmd (UpdateMessage Msg)
initTasks =
  Cmd.batch [ getPositionOptions, getDomainOptions ]

getDomainOptions : Cmd (UpdateMessage Msg)
getDomainOptions =
  Http.get "/api/toimialat" (Json.list Json.string)
    |> Util.errorHandlingSend GetDomainOptions

getPositionOptions : Cmd (UpdateMessage Msg)
getPositionOptions =
  Http.get "/api/tehtavaluokat" (Json.list Json.string)
    |> Util.errorHandlingSend GetPositionOptions

updateMe : User -> Cmd (UpdateMessage Msg)
updateMe user =
  Util.put "/api/profiilit/oma" (Models.User.encode user)
    |> Util.errorHandlingSend UpdateUser

updateConsent : Cmd (UpdateMessage Msg)
updateConsent =
  Http.post "/api/profiilit/luo" Http.emptyBody (Json.succeed ())
    |> Util.errorHandlingSend (always UpdateConsent)

updateSkillList : Int -> Skill.SkillLevel -> List Skill.Model -> List Skill.Model
updateSkillList index skillLevel list =
  List.indexedMap
    (\i x -> if i == index then Skill.update skillLevel x else x)
    list

deleteFromSkillList : Int -> List Skill.Model -> List Skill.Model
deleteFromSkillList index list =
  List.indexedMap (\i x -> if i == index then Nothing else Just x) list
    |> List.filterMap identity


updateUser : (User -> User) -> Model -> Model
updateUser update model =
  { model | user = Maybe.map update model.user }

type BusinessCardField
  = Name
  | Title
  | Location
  | Phone
  | Email

updateBusinessCard : Maybe BusinessCard -> BusinessCardField -> String -> Maybe BusinessCard
updateBusinessCard businessCard field value =
  case businessCard of
    Just businessCard ->
      case field of
        Name -> Just { businessCard | name = value}
        Title -> Just { businessCard | title = value }
        Location -> Just { businessCard | location = value }
        Phone -> Just { businessCard | phone = value }
        Email -> Just { businessCard | email = value }
    Nothing -> Nothing

update : Msg -> Model -> (Model, Cmd (UpdateMessage Msg))
update msg model =
  case msg of
    GetMe (Err err) ->
      let
        cmd =
          case err of
            Http.BadStatus { status } ->
              if status.code == 403 || status.code == 401
              then
                Cmd.none
              else
                Util.asApiError err
            _ ->
              Util.asApiError err

      in
        { model | user = Nothing } ! [ cmd ]

    GetMe (Ok user) ->
      { model | user = Just user } ! [ getAds user ]

    GetAds ads ->
      { model | ads = ads } ! []

    Save user ->
      model ! [ updateMe user ]

    AllowProfileCreation ->
      let
        newModel = { model | editing = True }
      in
        newModel ! [ updateConsent ]

    Edit ->
      { model | editing = True } ! []

    DomainSkillMessage index (Skill.LevelChange skillLevel) ->
      updateUser (\u -> { u | domains = updateSkillList index skillLevel u.domains }) model ! []

    PositionSkillMessage index (Skill.LevelChange skillLevel) ->
      updateUser (\u -> { u | positions = updateSkillList index skillLevel u.positions }) model ! []

    DomainSkillMessage index Skill.Delete ->
      updateUser (\u -> { u | domains = deleteFromSkillList index u.domains }) model ! []

    PositionSkillMessage index Skill.Delete ->
      updateUser (\u -> { u | positions = deleteFromSkillList index u.positions }) model ! []

    ChangeDomainSelect str ->
      updateUser (\u -> { u | domains = u.domains ++ [ Skill.Model str Skill.Interested ] }) model ! []

    ChangePositionSelect str ->
      updateUser (\u -> { u | positions = u.positions ++ [ Skill.Model str Skill.Interested ] }) model ! []

    ChangeLocation str ->
      updateUser (\u -> { u | location = str }) model ! []

    ChangeTitle str ->
      updateUser (\u -> { u | primaryPosition = String.slice 0 70 str }) model ! []

    ChangeNickname str ->
      updateUser (\u -> { u | name = str }) model ! []

    ChangeDescription str ->
      updateUser (\u -> { u | description = String.slice 0 300 str }) model ! []

    GetPositionOptions list ->
      { model | positionOptions = list } ! []

    GetDomainOptions list ->
      { model | domainOptions = list } ! []

    UpdateUser _ ->
      { model | editing = False } !
        (model.user
           |> Maybe.map (\user -> [ getAds user ])
           |> Maybe.withDefault []
        )

    UpdateBusinessCard field value ->
      updateUser (\u -> { u | businessCard = (updateBusinessCard u.businessCard field value) }) model ! []

    UpdateConsent ->
      model ! [ getMe ]

    ChangeImage user ->
      model ! [ imageUpload user.pictureEditingDetails ]

    ImageDetailsUpdate (cropped, editingDetails) ->
      updateUser (\u ->
                    { u
                      | pictureEditingDetails = Just editingDetails
                      , croppedPictureFileName =
                        if String.length cropped == 0
                        then
                          Nothing
                        else
                          Just cropped
                    }) model ! []

    MouseEnterProfilePic ->
      { model | mouseOverUserImage = True } ! []

    MouseLeaveProfilePic ->
      { model | mouseOverUserImage = False } ! []

    -- handled in User
    StartAddContact ->
      model ! []
    ChangeContactAddingText str ->
      model ! []
    AddContact user ->
      model ! []

    NoOp ->
      model ! []
