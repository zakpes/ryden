$(document).ready(function() {
        $(".navbar-toggle").click(function() {
            $(".collapse.navbar-collapse").slideToggle(500);
        });
        $(".search-icon-pwj li span").click(function() {
            $(".pwj-seach-box").slideToggle(500);
        });
    });
     $( "#mouse-hover-js" ).hover(function() {
        $("#added-hover-opening").addClass( "open" );}, function() {$("#added-hover-opening").removeClass( "open" );
    });
     $( "#mouse-hover-js2" ).hover(function() {
        $("#added-hover-opening2").addClass( "open" );}, function() {$("#added-hover-opening2").removeClass( "open" );
    });

$(document).ready(function() {
    var pathArray = window.location.pathname.split( '/' );
    var NameUrl = pathArray[pathArray.length-1];
    if((NameUrl=="technology.html")||(NameUrl=="innovation.html")||(NameUrl=="benefits.html")){document.getElementsByClassName("opened-li")[1].style.color="#666666";}
    if((NameUrl=="company.html")||(NameUrl=="research.html")||(NameUrl=="partnerships.html")){document.getElementsByClassName("opened-li")[0].style.color="#666666";}
    if(NameUrl=="media.html"){document.getElementById("media").style.color="#666666";}
    if(NameUrl=="contact.html"){document.getElementById("contact").style.color="#666666";}
});

/*Company page*/
    var usa = 1;
    $( "#photo1" ).click(function() {
        $("#redline1").fadeIn("fast");$("#redline2").fadeOut("fast");$("#redline3").fadeOut("fast");
        $("#righttextcontent2").css("display", "none");$("#righttextcontent3").css("display", "none");
        $( "#righttextcontent1" ).fadeIn("slow");
            $("#photo1").css("opacity", "1");$("#photo2").css("opacity", "0.4");$("#photo3").css("opacity", "0.4");
            usa = 1;
    });

    $( "#photo2" ).click(function() {
            $("#righttextcontent1").css("display", "none");$("#righttextcontent3").css("display", "none");
            $("#redline2").fadeIn("fast");$("#redline1").fadeOut("fast");$("#redline3").fadeOut("fast");
            $( "#righttextcontent2" ).fadeIn("slow");
                $("#photo2").css("opacity", "1");$("#photo1").css("opacity", "0.4");$("#photo3").css("opacity", "0.4");

                usa = 2;
                });

    $( "#photo3" ).click(function() {
        $("#redline3").fadeIn("fast");$("#redline1").fadeOut("fast");$("#redline2").fadeOut("fast");
        $("#righttextcontent1").css("display", "none");$("#righttextcontent2").css("display", "none");
        $( "#righttextcontent3" ).fadeIn("slow");
            $("#photo3").css("opacity", "1");$("#photo1").css("opacity", "0.4");$("#photo2").css("opacity", "0.4");

            usa = 3;
    });

    $( "#photo3" ).hover(function() {$("#photo3").css("opacity", "1");}, function() {if(usa!=3){$("#photo3").css("opacity", "0.5");}});
    $( "#photo2" ).hover(function() {$("#photo2").css("opacity", "1");}, function() {if(usa!=2){$("#photo2").css("opacity", "0.5");}});
    $( "#photo1" ).hover(function() {$("#photo1").css("opacity", "1");}, function() {if(usa!=1){$("#photo1").css("opacity", "0.5");}});


/* ExternalLinks which opening is in new window*/
function externalLinks() {
    links = document.getElementsByTagName("a");
    for (i=0; i<links.length; i++) {
      link = links[i];
      if (link.getAttribute("href") && link.getAttribute("rel") == "external")
      link.target = "_blank";
    }
}
window.onload = externalLinks;
/*End ExternalLinks*/

// Copyright current year
const date = new Date();
const copyright = document.getElementById("footer-copyright");
copyright.textContent = date.getFullYear();
