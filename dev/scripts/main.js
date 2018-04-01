let spencer = {};

spencer.functionality = () => {
    // Smooth scroll
    $('nav a').smoothScroll({
        speed: 1350
    });

    // active states on nav

    $(".addZero").addClass("active-square--nav");

    $('.about-me--nav').waypoint(function () {
        $(".inactive-square-transparent--nav").removeClass("active-square--nav");
        $(".addOne").addClass("active-square--nav")
    }), { offset: 50 };

    $('.research-section--nav').waypoint(function () {
        $(".inactive-square-transparent--nav").removeClass("active-square--nav");
        $(".addTwo").addClass("active-square--nav")
    }), { offset: 100 };

    $('.publications-section--nav').waypoint(function () {
        $(".inactive-square-transparent--nav").removeClass("active-square--nav");
        $(".addThree").addClass("active-square--nav")
    }), { offset: 100 };

    $('.education-section--nav').waypoint(function () {
        $(".inactive-square-transparent--nav").removeClass("active-square--nav");
        $(".addFour").addClass("active-square--nav")
    }), { offset: 100 };

    $('.skills-section--nav').waypoint(function () {
        $(".inactive-square-transparent--nav").removeClass("active-square--nav");
        $(".addFive").addClass("active-square--nav")
    }), { offset: 100 };

    $('.contact-section--nav').waypoint(function () {
        $(".inactive-square-transparent--nav").removeClass("active-square--nav");
        $(".addSix").addClass("active-square--nav")
    }), { offset: 100 };

    // hamberger menu

    function screenSize() {
        if (window.matchMedia('(max-width: 1000px)').matches) {
            $('.nav--flex').addClass('nav--mobile').removeClass('nav--flex');
            $('.hamburger').show();
        }
        else {
            $('.nav--mobile').addClass('nav--flex').removeClass('nav--mobile');
            $('.hamburger').hide();
            
        }
    };

    window.addEventListener('resize', screenSize, false);
    screenSize();


    $('.nav--mobile').on("click", function () {
        $(this).toggleClass('open');
    });


    // hover state in contact

    $('.contact--socials-indv').hover(function() {
        $(this).addClass("contact--socials-indv--hover");},
        function() {
        $(this).removeClass("contact--socials-indv--hover");
        }
    );


};

// init    
spencer.init = () => {
    spencer.functionality();
};

// the goods 
$(function () {
    spencer.init();
});