$(document).ready(function() {

/* For the sticky navigation */

  $('.js--section-features').waypoint(function(direction) {
      if (direction == "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }
  }, {
    offset: '60px;'
  }); 


  /*Scroll on buttons */
  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
  });
  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
  });




  /* Navigation scroll*/
$(function(){
    // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
})
/* Animations on scroll  */

$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
}, {
    offset: '50%'
});

$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
}, {
    offset: '50%'
});
 
$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
}, {
    offset: '50%'
});
$('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
}, {
    offset: '50%'
});

/* Mobile navigation */
$('.js--nav-icon').click(function() {
    var nav= $('.js--main-nav');
    var icon = $('.js--nav-icon ion-icon');
    nav.slideToggle(200);
    if (icon.attr('name') === "menu-outline") {
        icon.attr("name", "close-outline");
    } else {
        icon.attr("name", "menu-outline");
    }

});

/* Maps */
var map = new GMaps({
  div: '.map',
  lat: 45.7411629,
  lng: 21.1463786,
  zoom: 12
});

map.addMarker({
  lat: 45.7411629,
  lng: 21.1463786,
  title: 'Timisoara',
  infoWindow: {
    content: '<p>Our Timisoara</p>'
  }
});


  $('.js--send-btn').click(function() {
    /* Retrieved using native(vanilla) js*/
    var nameJs = document.getElementById('name').value;
    var emailJs = document.getElementById('email').value;
    var findUsJs = document.getElementById('find-us').value;
    var newsJs = document.getElementById('news').value;
    var messageJs = document.getElementById('message').value;
   
    
    /* Retrieved using jQuery*/
    var nameJq = $('#name').val();
    var emailJq = $('#email').val();
    var findUsJq = $('#find-us').val();
    var newsJq = $('#news').val();
    var messageJq = $('#message').val();

    var show = $('.show');
    var hide = $('.hide');
    var check = Math.floor(Math.random() * 2) + 1;
    initMessages();

    if (check === 1) {
      $(".success").removeClass("hide");
      $(".success").addClass("show");
    } else {
      $(".error").removeClass("hide");
      $(".error").addClass("show");
    }
    setTimeout(initMessages, 5000)

    });

  function initMessages() {
    var successMessage = $('.success');
    var errorMessage = $('.error');

    successMessage.removeClass("show");
    errorMessage.removeClass("show");

    successMessage.addClass("hide");
    errorMessage.addClass("hide");  
  }
});