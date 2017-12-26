"use strict";

$(function () {

    // Smooth scroll
    $('a').smoothScroll({
        speed: 1350
    });

    $(".addZero").addClass("active-square--nav");

    $('.about-me').waypoint(function () {
        $(".inner-circle--nav").removeClass("active-square--nav");
        $(".addOne").addClass("active-square--nav");
    });
});