$(document).ready(function() {
  $('.allcat .hamb, .categories .sub').click(function(){

    $('.row.cat').slideDown('slow', function() {
      
    });
    $('.allcat').slideUp('slow', function() {
      
    });
    $('html, body').animate({
        scrollTop: $(".allcat").offset().top
    }, 'slow');
  });
  $('.btn-up').click(function(){
    $('.row.cat').slideUp('slow', function() {
      
    });
    $('.allcat').slideDown('slow', function() {
      
    });
    $('html, body').animate({
        scrollTop: $(".row.cat").offset().top
    }, 'slow');
  });
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
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,        
      }
    },
    {
      breakpoint: 768,
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
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        
      }
    },
    {
      breakpoint: 768,
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
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        
      }
    },
    {
      breakpoint: 768,
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
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1
      }
    }]
  });



});