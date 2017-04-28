
//ANCHOR TAGS ===============================

$(function(){
    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);
      var windowWidth = $(window).width();

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 2000, 'swing', function () {
          window.location.hash = target;
      });
      
      if(windowWidth < 769){
        $('#nav-icon3').removeClass('open')
        $('#NAVMENU').fadeOut(300)
     }
  });
});



//ANCHOR TAGS END ===============================






// NAV +===========================

$(document).ready(function(){  
        $("#NAV").hide();                  
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 700) {
                $('#NAV').fadeIn();
            } else {
                $('#NAV').fadeOut();
            }
        });
    });

// NAV  +===========================






var fooReveal = {
  origin : 'left',
  delay    : 100,
  distance : '500px',
  easing   : 'ease-in-out',
  
};

var booReveal = {
  origin : 'right',
  delay    : 600,
  distance : '500px',
  easing   : 'ease-in-out',
  
};


var box0 = {
  origin : 'left',
  delay    : 500,
  distance : '500px',
  easing   : 'ease-in-out',
  
};


var box1 = {
  origin : 'right',
  delay    : 500,
  distance : '500px',
  easing   : 'ease-in-out',
  
};

var box2 = {
  origin : 'bottom',
  delay    : 700,
  distance : '300px',
  easing   : 'ease-in-out',
};






window.sr = ScrollReveal();
sr.reveal('.CURSR', { duration: 1500 }, 80);
sr.reveal('.title0', fooReveal);
sr.reveal('.title1', booReveal);
sr.reveal('.box0', box0);
sr.reveal('.box1', box1);
sr.reveal('.box2', box2);






// COLLAPSIBLE NAV MENU ===============================


$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });
});

$('#nav-icon3').click(function() {
    $('#NAVMENU').fadeToggle(300);
});



// COLLAPSIBLE NAV MENU END ===============================







