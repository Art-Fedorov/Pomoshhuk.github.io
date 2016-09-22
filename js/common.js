$(function()
{

  $(".flexisel").flexisel({
    visibleItems: 3,
    itemsToScroll: 3,
    animationSpeed: 400,
    infinite: true,
    navigationTargetSelector: null,
    autoPlay: {
      enable: false,
      interval: 4000,
      pauseOnHover: true
    },
    responsiveBreakpoints: { 
      portrait: { 
        changePoint:480,
        visibleItems: 1,
        itemsToScroll: 1
      }, 
        landscape: { 
        changePoint:700,
        visibleItems: 2,
        itemsToScroll: 2
      },
        tablet: { 
        changePoint:900,
        visibleItems: 2,
        itemsToScroll: 2
      }
    }
  });
  

	function parallax(selector,height=0){
    if (height!=0) $(selector).css("height",height);
  }
  function resizeParallax(){
    parallax('.parallax',$(window).height()/1.4);
  }
  resizeParallax();
  $(window).resize(function(){
    resizeParallax();
  });


    //Позволяет реанимировать блоки
    (function($) {
    $.fn.animated = function(inEffect, outEffect) {
        $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            } else {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            };
        }, {
            offset: "95%"
        }).waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            } else {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            };
        }, {
            offset: -$(window).height()
        });
    };
})(jQuery);
     

  function duration(dur){
    var a={
      "animation-duration":dur,
      "-webkit-animation-duration":dur
    };
    return a;
  };
  function delay(dur){
    var a={
      "-webkit-animation-delay": dur,
      "-o-animation-delay": dur,
      "animation-delay": dur
    }
    return a;
  };
  $('.employee-skills table tr').each(function(key,val) {
    var x=$(val).find("td:nth-child(3)").text();
    console.log($(this).find("td:nth-child(2) div.inner").css('width'));
    $(this).find("td:nth-child(2) div.inner").css('width',x);
  });

  $(".features__item").css(duration('.7s')).css(delay('0')).animated("zoomIn",'zoomOut');
  $(".plan-item").animated("fadeInRight",'fadeOutRight');
  $(".blog-item").animated("slideInLeft",'slideOutRight');
  $('.about .header-title+.paragraph').animated('fadeInUp','fadeOutDown');
  $('.about .table__cell:nth-child(3n-2)').animated('slideInLeft','fadeOutRight');
  $('.about .table__cell:nth-child(3n)').animated('slideInRight','fadeOutLeft');
});