'use strict';

var spencer = {};

spencer.functionality = function () {
    // Smooth scroll
    $('nav a').smoothScroll({
        speed: 1350
    });

    // hover and click effect on nav a
    // function hoverClick() {
    $('nav a').hover(function () {
        $('nav a').addClass('navOpacity');
        $(this).removeClass('navOpacity');
    }, function () {
        $('nav a').removeClass('navOpacity');
    });

    // active states on nav

    $(".addZero").addClass("active-square--nav");

    $('.about-me--nav').waypoint(function () {
        $(".inactive-square-transparent--nav").removeClass("active-square--nav");
        $(".addOne").addClass("active-square--nav");
    }), { offset: 50 };

    $('.research-section--nav').waypoint(function () {
        $(".inactive-square-transparent--nav").removeClass("active-square--nav");
        $(".addTwo").addClass("active-square--nav");
    }), { offset: 100 };

    $('.publications-section--nav').waypoint(function () {
        $(".inactive-square-transparent--nav").removeClass("active-square--nav");
        $(".addThree").addClass("active-square--nav");
    }), { offset: 100 };

    $('.education-section--nav').waypoint(function () {
        $(".inactive-square-transparent--nav").removeClass("active-square--nav");
        $(".addFour").addClass("active-square--nav");
    }), { offset: 100 };

    $('.skills-section--nav').waypoint(function () {
        $(".inactive-square-transparent--nav").removeClass("active-square--nav");
        $(".addFive").addClass("active-square--nav");
    }), { offset: 100 };

    $('.contact-section--nav').waypoint(function () {
        $(".inactive-square-transparent--nav").removeClass("active-square--nav");
        $(".addSix").addClass("active-square--nav");
    }), { offset: 100 };

    // hamberger menu

    function screenSize() {
        if (window.matchMedia('(max-width: 1000px)').matches) {
            $('.hamburger').show();
            $('.nav--flex').addClass('nav--mobile').removeClass('nav--flex');
        } else {
            $('.nav--mobile').addClass('nav--flex').removeClass('nav--mobile');
            $('.hamburger').hide();
            $('nav').removeClass('open');
        }
    };

    window.addEventListener('resize', screenSize, false);
    screenSize();

    $('nav').click(function () {
        $(this).toggleClass('open');
    });
};

// init    
spencer.init = function () {
    spencer.functionality();
};

// the goods 
$(function () {
    spencer.init();
});