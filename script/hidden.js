var firstPage = document.querySelector("#firstPage");
var secondPage = document.querySelector("#secondPage");
var waitPage = document.querySelector("#waitPage");
var btnSubmit = document.querySelector("#btnSubmit");
var downImg = document.querySelector("#down-img");
var again = document.querySelector("#again")
firstPage.style.display = "flex";
secondPage.style.display = "none";
waitPage.style.display = "none";




downImg.addEventListener('click', downloadImg())
again.addEventListener('click', function(){
    document.location.reload()
});

function showSecondPage () { /* Exibe a página do QR Code */
    waitPage.style.display = "none";
    firstPage.style.display = "none";
    secondPage.style.display = "flex";
};

function showWaitPage () { /* Exibe uma página de espera */
    firstPage.style.display = "none";
    secondPage.style.display = "none";
    waitPage.style.display = "flex";
    setTimeout(showSecondPage, 5000);
}
function showFirstPage () { /* Exibe a página de criação de QR Code (primeira pagina) */

    secondPage.style.display = "none";
    firstPage.style.display = "flex";
    waitPage.style.display = "none";
}