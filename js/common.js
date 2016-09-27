$(function(){

    /*scroll to top*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        /*появление кнопки регулировать тут*/
        if (scroll >= 1000) {
          $('.scroll-to-top').fadeIn(400);
        } else {
          $('.scroll-to-top').fadeOut(400);
        }
      });
    $('.scroll-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},400);
    });
  /*datepicker*/
   $('.datepicker').datepicker(
    { 
      dateFormat: 'dd.mm.yy',
      onSelect: function(dateText){
        $('.calendar .date').text(dateText);
        $('.datepicker').fadeOut('500');
      }
     });

  $('.popup-form .calendar img').click(function(){
    $('.datepicker').fadeToggle('500');
  });



  /*popup-form*/
  $('.sale-buy').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });
  /*banner close*/
  $('.banner .fa.close').click(function(){
    $('.banner').hide();
  })
  /*navbar-menu dropdown*/
  $('.navbar-menu .nav li').click(
      function(){
        if ($(window).width() >1200) {
          console.log('asd');
          $(this).find('.dropdown').fadeIn();
          $(this).addClass('dropped');
        }
      });
  $('.navbar-menu .nav li').hover(
      function(){
        if ($(window).width() >1200) {
          $(this).find('.dropdown').fadeIn();
          $(this).addClass('dropped');
        }
      },
      function(){
        if ($(window).width() >1200)
        {
          $(this).find('.dropdown').hide();
          $(this).removeClass('dropped');
        }
    });

  $('.navbar-menu .navbar-nav').hover(function(){
    if ($(window).width() >1200)
        {$('.fordropdown').slideDown();}
    },function(){
      $(this).find('.dropdown').hide();
      $('.fordropdown').hide();
    });

  $('.fordropdown').mouseover(function(){
      $(this).css('display','block');
    });
  

  /*Вставка изображения где его нет*/
  $('img').each(function(){
    if ($(this).attr('src').length==0)
    {
      $(this).attr('src','img/no-image.png'); 
    }
  });

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
  $('.stores .more .viewall.view').on('click',function(){
      $('.table .table-row.row-hidden').slideDown('fast');
       $(this).hide();
   $('.stores .more .viewall.hideall').show();

  });
    $('.stores .more .viewall.hideall').on('click',function(){

      $('.table .table-row.row-hidden').slideUp('fast');
    
    $(this).hide();
    $('.stores .more .viewall.view').show();
  });



    /*HISTORY SEARCH*/
  var left= $('#topmenu-form').offset().left+15;
  $(window).resize(function(){
    $('.history p span').css("margin-left",left+"px");
  });
  $('.history p span').css("margin-left",left+"px");
  
  $('.form-group input').on('click', function(){
    if($('.history').css('display')=='block')
      $('.history').slideUp();
    else 
      $('.history').slideDown();
  });

  $('.history-item').on('click',
    function(){
        if($('.history').css('display')=='block')
        { 
          $('.history').slideUp();
          $('.form-group input').val($(this).text());
        }
        else {
          $('.history').slideDown();
        }
    });

  $('main').on('click',
    function(){
      if($('.history').css('display')=='block')
       { $('.history').slideUp();  }
  
    });
  

  /*слайдеры*/
  // $('.navbar-menu .navbar-nav').slick({
  //   slidesToShow: 9,
  //   slidesToScroll: 1});
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
    appendArrows: $('.analog .arrows'),
    prevArrow:  $('.analog .arrows .arrow-right'), 
    nextArrow:  $('.analog .arrows .arrow-left'),
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





});
