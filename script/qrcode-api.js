
var searchApi = document.querySelector("#searchApi");
var userHttp = document.querySelector("#submitUrl");
var urlSpan = document.querySelector("#url-span");
var spanError = document.querySelector("#span-error");



btnSubmit.addEventListener('click', apiRequest);
;

function showQrcode (userSearch){ /* Exibe o QR Code */
    urlSpan.innerHTML = "Pronto! <br> este é o seu QR Code para: <br> " + userSearch;
    downloadImg(userSearch);
}


function apiValidate (userSearch) { /* Verifica se a api está disponível */
    var api = new XMLHttpRequest();
    api.open("GET", "https://api.qrserver.com/v1/create-qr-code/?data=" + userSearch);
    api.send();
    return api;
};

function apiRequest () { /* Valida endereço e a API */
    var userSearch = userHttp.value;
    if (userSearch.length > 0) {
       var api =  apiValidate(userSearch);
        api.addEventListener("load", function(){
            if (api.status == 200) {
                showQrcode(userSearch)
                showWaitPage();
                spanError.textContent = "";
            } else {
                spanError.textContent = "Serviço Indisponível :( <br> Já estamos trabalhando para corrigir";
                console.log(api.status);
            }
        });
    } else {
        spanError.textContent = "Por favor, digite um endereço válido!";
    }
}
function downloadImg(userSearch){ /* Cria uma imagem apta para download */


/* Solução base retirada deste post */
/* https://stackoverflow.com/questions/17527713/force-browser-to-download-image-files-on-click/49836565#49836565 */
/* answered Apr 14, 2018 at 21:57
Riley Bell */

    var image = new Image();
image.crossOrigin = "google";
image.src = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + userSearch;
var fileName = image.src.split(/(\\|\/)/g).pop();
image.onload = function () {
    var canvas = document.createElement('canvas');
    canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
    canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size
    canvas.getContext('2d').drawImage(this, 0, 0);
    var blob;
    // ... get as Data URI
    if (image.src.indexOf(".jpg") > -1) {
    blob = canvas.toDataURL("image/jpeg");
    } else if (image.src.indexOf(".png") > -1) {
    blob = canvas.toDataURL("image/png");
    } else if (image.src.indexOf(".gif") > -1) {
    blob = canvas.toDataURL("image/gif");
    } else {
    blob = canvas.toDataURL("image/png");
    }
    downImg.href =('' + blob);
    searchApi.src = blob;
};
}