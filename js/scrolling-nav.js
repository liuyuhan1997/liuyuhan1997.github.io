

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function(){
    $(".news:visible").hide();
    $(".news").slice(0, 5).show(); // select the first FIVE
    $("#load").click(function(e){ // click event for load more
        if ($( "#load" ).html() == "(not so new) news..."){
            e.preventDefault();
            $(".news:hidden").show(); // show hidden divs and show them
            $("#load").html("less..."); // alert if there are none lef
        }
        else {
            $("#load").html("(not so new) news..."); // alert if there are none lef
            $(".news:visible").hide(); // show hidden divs and show them
            $(".news").slice(0, 5).show(); // select the first FIVE
        }
    });
});