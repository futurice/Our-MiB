module Settings exposing (..)

import Common
import Html as H
import Html.Attributes as A
import Html.Events as E
import Http
import Models.User exposing (Settings, User)
import Nav
import State.Settings exposing (..)
import State.Util exposing (SendingStatus(..))
import Translation exposing (T)
import Util exposing (UpdateMessage(..), ViewMessage(..))


type Msg
    = GetSettings Settings
    | UpdateSettings (Result Http.Error ())
    | ToggleEmailsForAnswers Settings
    | ToggleEmailsForBusinessCards Settings
    | ToggleEmailsForNewAds Settings
    | Save Settings
    | ChangePassword


getSettings : Cmd (UpdateMessage Msg)
getSettings =
    Http.get "/api/asetukset" Models.User.settingsDecoder
        |> Util.errorHandlingSend GetSettings


updateSettings : Settings -> Cmd (UpdateMessage Msg)
updateSettings settings =
    Util.put "/api/asetukset" (Models.User.settingsEncode settings)
        |> Http.send (LocalUpdateMessage << UpdateSettings)


initTasks : Cmd (UpdateMessage Msg)
initTasks =
    getSettings


update : Msg -> Model -> ( Model, Cmd (UpdateMessage Msg) )
update msg model =
    case msg of
        GetSettings settings ->
            { model | settings = Just settings } ! []

        UpdateSettings (Ok _) ->
            { model | sending = FinishedSuccess "" } ! []

        UpdateSettings (Err _) ->
            { model | sending = FinishedFail } ! []

        ToggleEmailsForAnswers settings ->
            { model
                | sending = NotSending
                , settings =
                    Just
                        { settings
                            | emails_for_answers = not settings.emails_for_answers
                        }
            }
                ! []

        ToggleEmailsForBusinessCards settings ->
            { model
                | sending = NotSending
                , settings =
                    Just
                        { settings
                            | emails_for_businesscards = not settings.emails_for_businesscards
                        }
            }
                ! []

        ToggleEmailsForNewAds settings ->
            { model
                | sending = NotSending
                , settings =
                    Just
                        { settings
                            | emails_for_new_ads = not settings.emails_for_new_ads
                        }
            }
                ! []

        Save settings ->
            { model | sending = Sending } ! [ updateSettings settings ]

        ChangePassword ->
            model ! [ Util.reroute Nav.ChangePassword ]


view : T -> Model -> Maybe User -> H.Html (ViewMessage Msg)
view t model userMaybe =
    case ( model.settings, userMaybe ) of
        ( Just settings, Just user ) ->
            viewSettingsPage t model settings user

        ( Nothing, Just user ) ->
            H.div
                []
                [ Common.profileTopRow t user False Common.SettingsTab (H.div [] []) ]

        _ ->
            H.div [] []


viewSettingsPage : T -> Model -> Settings -> User -> H.Html (ViewMessage Msg)
viewSettingsPage t model settings user =
    H.div
        []
        [ Common.profileTopRow t user False Common.SettingsTab (H.div [] [])
        , H.map LocalViewMessage <| viewSettings t model settings
        ]


viewSettings : T -> Model -> Settings -> H.Html Msg
viewSettings t model settings =
    let
        t_ key =
            t ("settings." ++ key)
    in
    H.div
        [ A.class "container" ]
        [ H.div
            [ A.class "row" ]
            [ H.div
                [ A.class "col-xs-12" ]
                [ H.h1 [ A.class "settings__heading" ] [ H.text <| t_ "heading" ] ]
            , H.form
                []
                [ H.div
                    [ A.class "col-xs-12 col-sm-6" ]
                    [ H.h2 [ A.class "settings__subsection-heading" ] [ H.text <| t_ "emailsHeading" ]
                    , H.p [] [ H.text <| t_ "emailsInfo" ]
                    ]
                , H.div
                    [ A.class "col-xs-12 col-sm-6" ]
                    [ H.div
                        [ A.class "form-group"
                        ]
                        [ H.label []
                            [ H.text <| t_ "emailAddress" ]
                        , H.div []
                            [ H.text settings.email_address ]
                        ]
                    , H.div
                        [ A.class "checkbox" ]
                        [ H.label
                            []
                            [ H.input
                                [ A.type_ "checkbox"
                                , E.onClick <| ToggleEmailsForBusinessCards settings
                                , A.checked settings.emails_for_businesscards
                                ]
                                []
                            , H.text <| t_ "emailsForBusinesscards"
                            ]
                        ]
                    , H.div
                        [ A.class "checkbox" ]
                        [ H.label
                            []
                            [ H.input
                                [ A.type_ "checkbox"
                                , E.onClick <| ToggleEmailsForAnswers settings
                                , A.checked settings.emails_for_answers
                                ]
                                []
                            , H.text <| t_ "emailsForAnswers"
                            ]
                        ]
                    , H.div
                        [ A.class "checkbox" ]
                        [ H.label
                            []
                            [ H.input
                                [ A.type_ "checkbox"
                                , E.onClick <| ToggleEmailsForNewAds settings
                                , A.checked settings.emails_for_new_ads
                                ]
                                []
                            , H.text <| t_ "emailsForNewAds"
                            ]
                        ]
                    ]
                ]
            ]
        , H.div
            [ A.class "row last-row settings__save" ]
            [ H.div
                [ A.class "col-xs-12" ]
                [ H.button
                    [ E.onClick (Save settings)
                    , A.class "btn btn-default"
                    ]
                    [ H.text <| t_ "buttonSave" ]
                , H.p
                    []
                    [ H.text <| sendingToText t model.sending ]
                ]
            ]
        , H.div [ A.class "settings__change-password col-xs-11 col-sm-4 col-sm-offset-4" ]
            [ H.button
                [ E.onClick ChangePassword
                , A.class "settings__change-password-button btn btn-primary"
                ]
                [ H.text <| t_ "buttonChangePassword" ]
            ]
        ]


sendingToText : T -> SendingStatus -> String
sendingToText t sending =
    case sending of
        NotSending ->
            ""

        Sending ->
            t "settings.sending"

        FinishedSuccess _ ->
            t "settings.success"

        FinishedFail ->
            t "settings.error"
