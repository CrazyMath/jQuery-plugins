
(function ($) {
    $.fn.backToTop = function (options) {
        var settings = $.extend( {
          'top'  : '100px',
          'left' : '50px',
          'bottom': '',
          'right': '',
          'img': '/back-to-top.png',
          'verticalHeight' : $(window).height()/2
        }, options);
        this.append("<div id='backToTop'></div>");
        $("#backToTop").append("<img src='"+settings.img+"' alt='back-to-top'>")
        if (settings.bottom==='') {
            $("#backToTop").css({'position': 'fixed','top': settings.top});
        }else{
            $("#backToTop").css({'position': 'fixed','bottom': settings.bottom});
        };
        if (settings.right==='') {
            $("#backToTop").css({'left': settings.left});
        }else{
            $("#backToTop").css({'right': settings.right});
        };
        if (settings.verticalHeight>$(window).scrollTop()) {
            $("#backToTop").fadeOut(0);
        }else{
            $("#backToTop").fadeIn(0);
        };  
        $(window).scroll(function () {
            if (settings.verticalHeight>$(window).scrollTop()) {
                $("#backToTop").fadeOut(1000);
            }else{
                $("#backToTop").fadeIn(1000);
            };  
        });
        $("#backToTop").click(function(){
            $(window).scrollTop(0);
        });
        return this;
    };
})(jQuery);

