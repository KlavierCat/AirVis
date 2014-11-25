$(document).ready(function(){
    $("#map-icon").on('mouseenter', 
        function() {
            $(".front").css({"background-color": "#0971b2"
        });
    });
    $("#map-icon").on('mouseleave',
        function() {
            $(".front").css({"background-color":"#000000"
        });
    });
    $("#chart-icon").on('mouseenter',
        function() {
            $(".front").css({"background-color":"#b21212"
        });
    });
    $("#chart-icon").on('mouseleave',
        function() {
            $(".front").css({"background-color":"#000000"
        });
    });    
});