$(function(){

  /*Выезжающее меню*/
  $('.navbar-menu .nav li').hover(
    function(){
      $(this).find('.dropdown').fadeIn();
      $(this).addClass('dropped');
    },
    function(){
      $(this).find('.dropdown').hide();
      $(this).removeClass('dropped');
    });

  $('.navbar-menu .navbar-nav').hover(function(){
    $('.fordropdown').slideDown();
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
      console.log('asd');
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



  /*HISTORY SEARCH*/
  var left= $('#topmenu-form').offset().left+15;
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
  

});
