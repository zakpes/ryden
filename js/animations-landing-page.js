jQuery(function ($) {


    /* animates grey and green car moving and battery charging on scroll */

    var $carGrey = $(".car-grey");
    var $carGreen = $(".car-green");
    var $greyPath = $(".car-grey-path");
    var $greenPath = $(".car-green-path");
    var $miles = $(".miles");
    var $fillGreen = $(".fill-green");


    $(window).scroll(function() {

        //Get Window top & bottom limit
        var topWindowLimit = $(window).scrollTop();
        var bottomWindowLimit = $(window).height() + topWindowLimit;
        //Get Element top / bottom limit
        var batteryContainer = $(".fill-inner-container").offset().top;
        var carContainer = $(".car-container").offset().top;

        if (bottomWindowLimit > carContainer) {
            $carGrey.addClass("car-grey-move");
            $carGreen.addClass("car-green-move");
            $greyPath.addClass("grey-path-move");
            $greenPath.addClass("green-path-move");
            $miles.addClass("miles-move");
        }
        /*$(".miles").css("margin-left", "70px").delay(slow);*/

    });


    /* car movement animation on mouseenter
    $(".car-container").one("mouseenter", function() {
        carGrey.removeClass("car-grey-move").width();
        carGreen.removeClass("car-green-move").width();
        greyPath.removeClass("grey-path-move").width();
        greenPath.removeClass("green-path-move").width();
        miles.removeClass("miles-move").width();
        carGrey.addClass("car-grey-move2");
        carGreen.addClass("car-green-move2");
        greyPath.addClass("grey-path-move2");
        greenPath.addClass("green-path-move2");
        miles.addClass("miles-move2");
    });

    battery chargin animation on mouseenter
    $(".battery-fill-container").one("mouseenter", function() {
        fillGreen.removeClass("fill-green-ani").width();
        fillGreen.addClass("fill-green-ani2");

    });
    */

    /* animates recycle icon*/
    $(".recycle-animate").mouseenter(function() {
        $(".icon-recycle").addClass("recycle-spin");
    });

    $(".recycle-animate").mouseleave(function() {
        $(".icon-recycle").removeClass("recycle-spin");
    });

    /* smooth scrolling between sections
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
        }
    });*/

    smoothScroll(1000);

    function smoothScroll(duration) {
        $("a[href*=#]:not([href*=#][data-toggle='tab'])").click(function(event) {

            var target = $( $(this).attr("href") );

            if (target.length) {
                event.preventDefault();
                $("html, body").animate({
                    scrollTop: target.offset().top
                }, duration);
            }
        });
    }
/*
     technology section text changer

    var $rel = $(".text-container-reliability");
    var $safe = $(".text-container-safety");
    var $cost = $(".text-container-cost");
    var $labCost = $(".label-cost");
    var $labSafe = $(".label-safety");
    var $labRel = $(".label-reliability");

    $labRel.click(function() {
        $rel.addClass("active").fadeIn(1000);
        $safe.removeClass("active").fadeOut(1000);
        $cost.removeClass("active").fadeOut(1000);

        $labCost.removeClass("active");
        $labSafe.removeClass("active");
        $labRel.addClass("active");
    });

    $labSafe.click(function() {
        $cost.removeClass("active").fadeOut(1000);
        $rel.removeClass("active").fadeOut(1000);
        $safe.addClass("active").fadeIn(1000);

        $labRel.removeClass("active");
        $labCost.removeClass("active");
        $labSafe.addClass("active");
    });

    $labCost.click(function() {
        $rel.removeClass("active").fadeOut(1000);
        $safe.removeClass("active").fadeOut(1000);
        $cost.addClass("active").fadeIn(1000);

        $labRel.removeClass("active");
        $labSafe.removeClass("active");
        $labCost.addClass("active");
    });*/

    var label = ".label-tech";
    var textToHide = ".text-container";
    $(".text-container-reliability, .text-container-safety").hide();// hide containers initially

    $(label).click(function() {

        $(label + ".active").removeClass("active");
        $(this).addClass("active");

        var $textToShow = $(this).attr("rel");

        $(textToHide + ".active").removeClass("active").fadeOut(500, function() {
            $("#" + $textToShow).fadeIn(500).addClass("active");
        });
    });



});
