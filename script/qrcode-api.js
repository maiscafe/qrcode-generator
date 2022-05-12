
var searchApi = document.querySelector("#searchApi");
var userHttp = document.querySelector("#submitUrl");
var urlSpan = document.querySelector("#url-span");
var spanError = document.querySelector("#span-error");

btnSubmit.addEventListener('click', function(){
    var userSearch = userHttp.value;
    if (userSearch.length > 0) {
        showQrcode(userSearch)
        showSecondPage();
    } else {
        spanError.textContent = "Por favor, digite um endereço válido!";
    }
});

function showQrcode (userSearch){
    searchApi.src = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + userSearch;
    urlSpan.innerHTML = "Pronto! <br> este é o seu Qr Code para: <br> " + userSearch;
}