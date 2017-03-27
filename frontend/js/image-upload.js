import Cropper from 'cropperjs';

let details;

export default function initImageUpload(elm2js, js2elm) {
  elm2js.subscribe((detailsIn) => {
    details = detailsIn || {};
    const container = document.getElementById('image-upload');
    container.classList.add('image-upload--active')
    const imageInput =
          `<label for="image-input" class="image-upload__file-label btn btn-primary btn-lg">Lataa kuva</label>
      <input id="image-input" class="image-upload__file-input" type="file" onChange="imageUploadInit();"></input>` ;
    if (details.pictureUrl) {
      initEditor(details.pictureUrl, details);
    } else {
      container.innerHTML = containerHtml(imageInput);
    }


    function initEditor(fileName, data) {
      const imgTag = `<img src="/static/images/${fileName}" id="image-editor-image" class="image-upload__img" />`;
      const cropperDiv = `<div>${imgTag}</div>`;
      const editor = `${cropperDiv}
<div>
  <button onClick="imageUploadCancel();" class="btn btn-danger" style="margin-right: 25px;">Peru</button>
  <button onClick="imageUploadRemove();" class="btn btn-danger" style="margin-right: 25px;">Poista</button>
  <button onClick="imageUploadSave();" class="btn btn-primary" style="margin-right: 25px;">Valmis</button>
</div>
`;
      container.innerHTML = containerHtml(editor);
      const imgElement = document.getElementById('image-editor-image')
      const cropper = new Cropper(imgElement, {
        aspectRatio: 1,
        zoomable: false,
        croppable: true,
        scalable: false,
        rotatable: false,
        data,
        crop: function(e) {
          details.x = e.detail.x;
          details.y = e.detail.y;
          details.width = e.detail.width;
          details.height = e.detail.height;
        }
      });
    }

    window.imageUploadSave = () => {
      js2elm.send(details);
      container.classList.remove('image-upload--active')
    };

    window.imageUploadRemove = () => {
      js2elm.send({
        url: '',
        x: 0,
        y: 0,
        width: 0,
        height: 0
      });
      container.classList.remove('image-upload--active')
    };

    window.imageUploadCancel = () => {
      container.classList.remove('image-upload--active')
    };

    window.imageUploadClose = () => {
      container.classList.remove('image-upload--active');
    };

    window.imageUploadInit = () => {
      const input = document.getElementById("image-input");
      const formData = new FormData();
      const url = '/api/profiilit/oma/kuva';
      formData.append("image", input.files[0]);
      const request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
          const fileName = request.responseText;
          details.pictureUrl = fileName;
          const data = {};
          initEditor(fileName, data);
        }
      };
      request.open("PUT", url);
      request.send(formData);
    }
  })
}

function containerHtml(content) {
  return `
<div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 image-upload__content">
<i class="image-upload__close-button fa fa-close fa-lg" onClick="imageUploadClose();"></i>
${content}
</div>
`

}

