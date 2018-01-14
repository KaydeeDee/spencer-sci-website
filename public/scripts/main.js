"use strict";

$(function () {

    // Smooth scroll
    $('a').smoothScroll({
        speed: 1350
    });

    // active states on nav

    $(".addZero").addClass("active-square--nav");

    $('.about-me--nav').waypoint(function () {
        $(".inner-circle--nav").removeClass("active-square--nav");
        $(".addOne").addClass("active-square--nav");
    }), { offset: 50 };

    $('.research-section--nav').waypoint(function () {
        $(".inner-circle--nav").removeClass("active-square--nav");
        $(".addTwo").addClass("active-square--nav");
    }), { offset: 100 };

    $('.publications-section--nav').waypoint(function () {
        $(".inner-circle--nav").removeClass("active-square--nav");
        $(".addThree").addClass("active-square--nav");
    }), { offset: 100 };

    $('.education-section--nav').waypoint(function () {
        $(".inner-circle--nav").removeClass("active-square--nav");
        $(".addFour").addClass("active-square--nav");
    }), { offset: 100 };

    $('.skills-section--nav').waypoint(function () {
        $(".inner-circle--nav").removeClass("active-square--nav");
        $(".addFive").addClass("active-square--nav");
    }), { offset: 100 };

    $('.contact-section--nav').waypoint(function () {
        $(".inner-circle--nav").removeClass("active-square--nav");
        $(".addSix").addClass("active-square--nav");
    }), { offset: 100 };

    // skills hover pop up

    // $('.skills--icons-indv--mapping').on('click', function () {
    //     $(".skills--icons-indv--mapping-text").slideToggle("slow");
    //     $(".skills--icons-indv--mapping").mouseleave ( function () {
    //         $(".skills--icons-indv--mapping-text").slideUp("slow");
    //     })

    // });


    // hover state in contact

    $('.contact--socials-indv').hover(function () {
        $(this).addClass("contact--socials-indv--hover");
    }, function () {
        $(this).removeClass("contact--socials-indv--hover");
    });
});