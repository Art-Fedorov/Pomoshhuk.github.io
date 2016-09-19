
$(window).load(function() {
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
});

$(function()
{
	
  $(".parallax").css("height",$(window).height()/1.3);
  $(window).resize(function(){
    $(".parallax").css("height",$(window).height()/1.3);
  });

  function addwow(boxClass,animateClass,offset=0,duration='1s',delay='.3s'){
    var wow = new WOW(
    {
      boxClass:     boxClass,   
      animateClass: 'animated '+animateClass, 
      offset:offset,
      scrollContainer: null 
    });
    $('boxClass').data('wow-duration',duration).data(delay,'2s');
    wow.init();
  }
  addwow("features__item","zoomIn");
  addwow("plan-item","fadeInUp",100,"2s");
  addwow("blog-item","slideInLeft",0,'1s');

})