// scroll.js
$(document).ready(function(){
    $(".hero").on("touchstart touchmove", function(event){
        var startY = event.originalEvent.touches[0].pageY;
        var startScroll = $(this).scrollTop();

        if (startScroll <= 0 && startY > 150) {
            event.preventDefault();
        }

        $(this).on("touchmove", function(event){
            var currentY = event.originalEvent.touches[0].pageY;
            var currentScroll = $(this).scrollTop();

            if (currentScroll <= 0 && currentY > startY) {
                event.preventDefault();
            }
        });
    });
});
