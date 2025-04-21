$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });

  // smooth scrolling
  $('a[href*="#"]').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop : $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

  // Modo claro/oscuro
  $('#toggle-mode').click(function() {
    $('body').toggleClass('light-mode');

    // Cambia el texto del botón según el modo
    if ($('body').hasClass('light-mode')) {
      $('#toggle-mode').text('Modo Oscuro');
    } else {
      $('#toggle-mode').text('Modo Claro');
    }
  });

});
