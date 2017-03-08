// Agency Theme JavaScript
(function($) {
    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict

// scroll change logo src path
$(document).ready(function() {
    var scrollPos = 0;
    $(window).scroll(function() {
        var scrollPosCur = $(this).scrollTop();
        if (scrollPosCur > 99) {
            $('#navbrand').attr('src', 'images/logo.png');
        } else {
            $('#navbrand').attr('src', 'images/logo-bg.png');
        }
        // console.log(scrollPosCur);
    });

    $('.datepicker').datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        todayHighlight: true
    });
});
