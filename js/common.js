
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
	$('body').on('change','.flexisel',function(){
		console.log('asd');
		var top= $('.nbs-flexisel-nav-right .arrow').css('top');
		console.log(top);
	});

});