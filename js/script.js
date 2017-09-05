
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





for (i = 0; i < 50; i++) {
  var cloneHtml = $('#LIST_WRAP').clone();
  cloneHtml.appendTo('.CURSR_WRAP');
}
var fooReveal = {
  origin : 'bottom',
  delay    : 500,
  distance : '100px',
  easing   : 'ease',
};
var box0 = {
  origin : 'left',
  delay    : 200,
  distance : '100px',
  easing   : 'ease-in-out', 
};
var box1 = {
  origin : 'right',
  delay    : 200,
  distance : '100px',
  easing   : 'ease-in-out',
};
var box2 = {
  origin : 'bottom',
  delay    : 200,
  distance : '100px',
  easing   : 'ease-in-out',
};

window.sr = ScrollReveal();
sr.reveal('.CURSR', { duration: 1500 }, 80);
sr.reveal('.foo', fooReveal);
sr.reveal('.box0', box0);
sr.reveal('.box1', box1);
sr.reveal('.box2', box2);








// COLLAPSIBLE NAV MENU ===============================


$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
    $('#NAVMENU').fadeToggle(300);
    $('#NAV').toggleClass("colorChange")
  });
});




// COLLAPSIBLE NAV MENU END ===============================



// ACCORDION ===============================

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

// ACCORDION END ===============================




