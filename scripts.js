$(function(){
    carouselList = $("#carousel ul");
    setInterval(changeSlide, 3000);
});




function changeSlide() {
    $("#carousel ul").animate({'marginLeft':-400}, 500, moveFirstSlide);
}


function moveFirstSlide() {
    var firstItem = $("#carousel ul").find("li:first");
    var lastItem = $("#carousel ul").find("li:last");
    lastItem.after(firstItem)
    $("#carousel ul").css({marginLeft:0});
}

// To samo co wyzej ale pierwsza wersja zapisu //
/*
$(function(){
    var carouselList = $("#carousel ul");
});

var timer = setInterval(changeSlide, 3000);

function changeSlide() {
    $carouselList.animate({'marginLeft':-800}, 500, moveFirstSlide);

}

function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem)
    carouselList.css({marginLeft:0});
}