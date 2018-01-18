
$(function(){
    var carouselList = $("#carousel ul");
    setInterval(changeSlide, 3000);
});

function changeSlide() {
    $("#carousel ul").animate({'marginLeft':-300}, 500, moveFirstSlide);
}

function moveFirstSlide() {
    var firstItem = $("#carousel ul").find("li:first");
    var lastItem = $("#carousel ul").find("li:last");
    lastItem.after(firstItem)
    $("#carousel ul").css({marginLeft: 0});
}

