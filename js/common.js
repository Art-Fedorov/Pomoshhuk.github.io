$(document).ready(function() {
  

    $('.navbar-menu .nav li').hover(function(){
      var html=$(this).find('.dropdown').html();
      $('.fordropdown .place .dropdown').html(html);
    });
    // $(".dropdown").width($(window).width());
    // $(window).resize(function(){$(".dropdown-menu").width($(window).width());});
    // $('.navbar-menu .nav li').hover(function(){
    //   $(this).find('.dropdown').show();
    // },function(){
    //   $(this).find('.dropdown').hide();
    // });
  

  /*Все категории*/
  $('.cat-up').click(function(){
    $('.row.cat').slideUp('slow', function() {
      
    });
    $('.allcat').slideDown('slow', function() {
      
    });
    $('html, body').animate({
        scrollTop: $(".row.cat").offset().top
    }, 'slow');
  });
  $('.allcat .hamb, .categories .sub').click(function(){

    $('.row.cat').slideDown('slow', function() {
      
    });
    $('.allcat').slideUp('slow', function() {
      
    });
    $('html, body').animate({
        scrollTop: $(".allcat").offset().top
    }, 'slow');
  });

  /*Регистрация*/
  $('.reg .header-item p').click(function () {
    var register=$(this).parent();
    var enter=$(this).parent();
    if (register.hasClass('register'))
    {
      register.addClass('active');
      $('.reg .forms .register').addClass('active');
      $('.reg .header-item.enter').removeClass('active');
      $('.reg .forms .enter').removeClass('active');
    }
    if (enter.hasClass('enter'))
    { 
      enter.addClass('active');
      $('.reg .forms .enter').addClass('active');
      $('.reg .header-item.register').removeClass('active');
      $('.reg .forms .register').removeClass('active');
    }
  });

  $('.table .table-row.row-hidden').hide();
  /*Карточка товара показать все*/
  $('.stores .more .viewall').click(function(){
    $('.table .table-row.row-hidden').slideDown('fast'); 

  });

  /*слайдеры*/
  $('.popular .gallery').slick({
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendArrows: $('.popular .arrows'),
    prevArrow:  $('.popular .arrows .arrow-right'), 
    nextArrow:  $('.popular .arrows .arrow-left'),
    responsive: [

    {
      breakpoint: 1200,
      settings: {
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,        
      }
    },
    {
      breakpoint: 992,
      settings: {
        rows: 1,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1
      }
    }]
  });
  $('.today .gallery').slick({
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendArrows: $('.today .arrows'),
    prevArrow:  $('.today .arrows .arrow-right'), 
    nextArrow:  $('.today .arrows .arrow-left'),
      responsive: [

    {
      breakpoint: 1200,
      settings: {
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,        
      }
    },
    {
      breakpoint: 992,
      settings: {
        rows: 1,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1
      }
    }]
  });
  $('.interest .gallery').slick({
    rows: 1,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    appendArrows: $('.interest .arrows'),
    prevArrow:  $('.interest .arrows .arrow-right'), 
    nextArrow:  $('.interest .arrows .arrow-left'),
      responsive: [

    {
      breakpoint: 1200,
      settings: {
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,        
      }
    },
    {
      breakpoint: 992,
      settings: {
        rows: 1,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1
      }
    }]
  });
   $('.footer .footer-gallery').slick({
    rows: 1,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    appendArrows: $('.footer .arrows'),
    prevArrow:  $('.footer .arrows .arrow-right'), 
    nextArrow:  $('.footer .arrows .arrow-left'),
      responsive: [

    {
      breakpoint: 1200,
      settings: {
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,        
      }
    },
    {
      breakpoint: 992,
      settings: {
        rows: 1,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1
      }
    }]
  });
   $('.analog .gallery').slick({
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    appendArrows: $('.footer .arrows'),
    prevArrow:  $('.footer .arrows .arrow-right'), 
    nextArrow:  $('.footer .arrows .arrow-left'),
      responsive: [

    {
      breakpoint: 1200,
      settings: {
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,        
      }
    },
    {
      breakpoint: 992,
      settings: {
        rows: 1,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1
      }
    }]
  });
    var left= $('#topmenu-form').offset().left;
    $('.history p span').css("margin-left",left+"px");
   $('.form-group input').on('click',
      function(){
        if($('.history').css('display')=='block')
          $('.history').slideUp();
        else 
          $('.history').slideDown();

      });
   $('.history-item').on('click',
      function(){
        if($('.history').css('display')=='block')
         { $('.history').slideUp();
             $('.form-group input').val($(this).text());
     }

        else {
          $('.history').slideDown();
         }
      });
    
});



function getElementPosition(elemId)
{
    var elem = document.getElementById(elemId);
  
    var w = elem.offsetWidth;
    var h = elem.offsetHeight;
  
    var l = 0;
    var t = 0;
  
    while (elem)
    {
        l += elem.offsetLeft;
        t += elem.offsetTop;
        elem = elem.offsetParent;
    }

    return {"left":l, "top":t, "width": w, "height":h};
}