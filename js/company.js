/* Company page */
    var usa = 1;
    $( "#photo1" ).click(function() {
        $("#redline1").fadeIn("fast");$(".company-redline.redline-2").fadeOut("fast");$("#redline3").fadeOut("fast");
        $("#newrighttextcontent2").css("display", "none");$("#newrighttextcontent3").css("display", "none");
        $( "#newrighttextcontent1" ).fadeIn("slow");
            $("#photo1").css("opacity", "1");$("#photo2").css("opacity", "0.4");$("#photo3").css("opacity", "0.4");
            usa = 1;
    });

    $( "#photo2" ).click(function() {
            $("#newrighttextcontent1").css("display", "none");$("#newrighttextcontent3").css("display", "none");
            $(".company-redline.redline-2").fadeIn("fast");$("#redline1").fadeOut("fast");$("#redline3").fadeOut("fast");
            $( "#newrighttextcontent2" ).fadeIn("slow");
                $("#photo2").css("opacity", "1");$("#photo1").css("opacity", "0.4");$("#photo3").css("opacity", "0.4");

                usa = 2;
                });

    $( "#photo3" ).click(function() {
        $("#redline3").fadeIn("fast");$("#redline1").fadeOut("fast");$(".company-redline.redline-2").fadeOut("fast");
        $("#newrighttextcontent1").css("display", "none");$("#newrighttextcontent2").css("display", "none");
        $( "#newrighttextcontent3" ).fadeIn("slow");
            $("#photo3").css("opacity", "1");$("#photo1").css("opacity", "0.4");$("#photo2").css("opacity", "0.4");

            usa = 3;
    });

    $( "#photo3" ).hover(function() {$("#photo3").css("opacity", "1");}, function() {if(usa!=3){$("#photo3").css("opacity", "0.5");}});
    $( "#photo2" ).hover(function() {$("#photo2").css("opacity", "1");}, function() {if(usa!=2){$("#photo2").css("opacity", "0.5");}});
    $( "#photo1" ).hover(function() {$("#photo1").css("opacity", "1");}, function() {if(usa!=1){$("#photo1").css("opacity", "0.5");}});
