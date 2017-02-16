$('document').ready(function(){
  $('.signin').on('click',function(){
    $('.modal').fadeIn("slow", function(){
      //Animation Complete.
    });
  });
    $('.close').on('click', function(){
      $('.modal').fadeOut('slow');
    });

      $('.submit').on('click', function(){
        $('.getstarted input').addClass('error');
      });

      $('input').on('click', function(){
        $(this).removeClass('error');
      });

      $('.modal').on('click',function(){
        $(this).fadeOut("fast");
      });

});
