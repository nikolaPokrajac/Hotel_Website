$(document).ready(function() {
  /* Sticky navigation */
  $('.js--section-features').waypoint(
    function(direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '60px;'
    }
  );

  /* Scroll on buttons */
  $('.js--scroll-to-rooms').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.js--section-rooms').offset().top
      },
      1000
    );
  });

  $('.js--scroll-to-start').click(function() {
    $('html,body').animate(
      {
        scrollTop: $('.js--section-features').offset().top
      },
      1000
    );
  });

  /* Scroll on nav links */
  var scrollLink = $('.scroll');

  scrollLink.click(function(event) {
    event.preventDefault();
    $('html, body').animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      1000
    );
  });

  /* Animations on scroll*/
  $('.js--wp-1').waypoint(
    function(direction) {
      $('.js--wp-1').addClass('animated fadeInUp');
    },
    {
      offset: '50%'
    }
  );

  /* Mobile navigation */
  $('.js--navigation-icon').click(function() {
    var nav = $('.js--navigation__list');
    var icon = $('.js--navigation-icon');
    var textBox = $('.js--text-box');

    $(textBox).hide();

    nav.slideToggle(200);

    $(icon).click(function() {
      $(textBox).toggle();
    });
  });

  // Display .text-box if mobile menu wasnt closed before resizeing screen
  $(window).resize(function() {
    var sWidth = $(window).width();
    if (sWidth > 600) {
      $('.js--text-box').show();
    }
  });
});
