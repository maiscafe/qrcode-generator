var firstPage = document.querySelector("#firstPage");
var secondPage = document.querySelector("#secondPage");
var btnSubmit = document.querySelector("#btnSubmit");
firstPage.style.display = "flex";
secondPage.style.display = "none";




secondPage.addEventListener('click', showFirstPage);


function showSecondPage () {
    firstPage.style.display = "none";
    secondPage.style.display = "flex";
};

function showLoadPage () {
    
}
function showFirstPage () {
    secondPage.style.display = "none";
    firstPage.style.display = "flex";
}
