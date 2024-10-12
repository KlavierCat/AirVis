$(document).ready(function(){
    $("#map-icon").on('mouseenter',
        function() {
            $(".front").animate({"background-color": "#0971b2"
        }, 'ease-in-out');
    });
    $("#map-icon").on('mouseleave',
        function() {
            $(".front").animate({"background-color":"#000000"
        }, 'fast');
    });
    $("#chart-icon").on('mouseenter',
        function() {
            $(".front").animate({"background-color":"#b21212"
        }, 'ease-in-out');
    });
    $("#chart-icon").on('mouseleave',
        function() {
            $(".front").animate({"background-color":"#000000"
        }, 'fast');
    });
});
