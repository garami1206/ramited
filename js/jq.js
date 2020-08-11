$(document).ready(function(){
    /*슬릭*/
    $('.portfolio').slick({
        prevArrow:'<div class="prevArrow arrow"></div>',
        nextArrow:'<div class="nextArrow arrow"></div>',
    });
    
    $(".topBtn").click(function(){
          $("window").scrollTop(0);
            });
    
jQuery(window).scroll(startCounter);
function startCounter() {
    var hT = jQuery('.skills').offset().top,
        hH = jQuery('.skills').outerHeight(),
        wH = jQuery(window).height();
    if (jQuery(window).scrollTop() > hT+hH-wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.pct').each(function () {
            var $this = jQuery(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter) + '%');
                }
            });
        });
    }
}
   
});

