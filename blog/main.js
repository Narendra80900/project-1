let search=document.querySelector('.search-box');

document.querySelector('#icon').onclick=()=>{
    search.classList.toggle('active');
}

$('.navbar').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainlink").toggleClass("show_list");
    $("#mainlink").fadeIn();

});