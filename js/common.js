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
    nextArrow:  $('.popular .arrows .arrow-left')
  });
  $('.today .gallery').slick({
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendArrows: $('.today .arrows'),
    prevArrow:  $('.today .arrows .arrow-right'), 
    nextArrow:  $('.today .arrows .arrow-left')
  });
  $('.interest .gallery').slick({
    rows: 1,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendArrows: $('.interest .arrows'),
    prevArrow:  $('.interest .arrows .arrow-right'), 
    nextArrow:  $('.interest .arrows .arrow-left')
  });
   $('.footer .footer-gallery').slick({
    rows: 1,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendArrows: $('.footer .arrows'),
    prevArrow:  $('.footer .arrows .arrow-right'), 
    nextArrow:  $('.footer .arrows .arrow-left')
  });



});