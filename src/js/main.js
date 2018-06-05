$(document).ready(function(){
  $(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else
    {
        $('nav').removeClass('black');
    }
  });

  $("#btnmenu").click(function(){
    $(this).toggleClass('active'); $(this).parent().parent().find('ul').toggleClass('hide');
   });
});