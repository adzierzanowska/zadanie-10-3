/*$(function(){
    carouselList = $("#carousel ul");
    setInterval(changeSlide, 2000);
});

function changeSlide() {
    $("#carousel ul").animate({'marginLeft':-400}, 500, moveFirstSlide);
}

function moveFirstSlide() {
    var firstItem = $("#carousel ul").find("li:first");
    var lastItem = $("#carousel ul").find("li:last");
    lastItem.after(firstItem)
    $("#carousel ul").css({marginLeft:0});
} */

// To samo co wyzej ale pierwsza wersja zapisu //

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

$( "#clickme" ).click(function() {
    $( "#book" ).animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 5000, function() {
        // Animation complete.
    });
});