"use strict";

var spencer = {};

spencer.effects = function () {
    // Smooth scroll
    $("nav a").smoothScroll({
        speed: 1350,
        offset: 5
    });

    // hover and click effect on nav a
    spencer.hoverClick = function () {
        $("nav a").hover(function () {
            $("nav a").addClass("navOpacity");
            $(this).removeClass("navOpacity");
        }, function () {
            $("nav a").removeClass("navOpacity");
        });
    };
    spencer.hoverClick();

    // active states on nav
    //below is a waypoint solution that C.Keeley used. Visit her at www.chelseakeeley.com 
    spencer.scrolling = function () {
        // default home as active
        $("#toTop--squareActive").addClass("active-square--nav");

        $(window).scroll(function () {
            var location = $(this).scrollTop();

            // id by section
            $("section").each(function () {
                var target = $(this).offset().top;
                var targetID = $(this).attr("id");

                // location vs. target conditional
                if (location >= target) {
                    $(".inactive-square-transparent--nav").removeClass("active-square--nav");
                    $("#" + targetID + "--squareActive").addClass("active-square--nav");
                } else if (target - location <= 5) {
                    $(".inactive-square-transparent--nav").removeClass("active-square--nav");
                    $("#" + targetID + "--active").addClass("active-square--nav");
                } else if (location <= 50) {
                    $(".inactive-square-transparent--nav").removeClass("active-square--nav");
                    $("#toTop--squareActive").addClass("active-square--nav");
                }
            });
        });
    };
    spencer.scrolling();

    // hamberger menu
    //screen size listener
    spencer.screenSize = function () {
        if (window.matchMedia("(max-width: 1000px)").matches) {
            $(".hamburger").show();
            $(".nav--flex").addClass("nav--mobile").removeClass("nav--flex");
            $(".anchor-in-text--global").removeClass("tooltip"); //disable tooltip for mobile
        } else {
            $(".nav--mobile").addClass("nav--flex").removeClass("nav--mobile");
            $(".hamburger").hide();
            $("nav").removeClass("open"); //if window grows while hamburger is open, close hamburger, reset it to closed by default
            $(".anchor-in-text--global").addClass('tooltip'); //enable tooltip for larger screens
        }
    };

    window.addEventListener("resize", spencer.screenSize, false);
    spencer.screenSize();

    // toggling mobile nav full screen ul
    $("nav").click(function () {
        $(this).toggleClass("open");
    });
};

// init    
spencer.init = function () {
    spencer.effects();
};

// the goods 
$(function () {
    spencer.init();
});