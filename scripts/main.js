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

  // Display .text-box if mobile menu wasnt closed before resizeing screen
  $(window).resize(function() {
    var sWidth = $(window).width();
    if (sWidth > 600) {
      $('.js--text-box').show();
      $('.js--navigation-list').removeClass('active');
      $('.js--navigation-checkbox').prop('checked', false);
    }
  });
});

var navList = document.querySelector('.js--navigation-list');
var navIcon = document.querySelector('.js--navigation-icon');
var textBox = document.querySelector('.js--text-box');
var navLink = document.querySelectorAll('.js--navigation-link');
var checkbox = document.querySelector('.js--navigation-checkbox');

// open and close nav
navIcon.addEventListener('click', function() {
  navList.classList.toggle('active');
});

// display and hide header text
function textBoxDisplay() {
  if (textBox.style.display === 'none') {
    textBox.style.display = 'block';
  } else {
    textBox.style.display = 'none';
  }
}

navIcon.addEventListener('click', textBoxDisplay);

// Closing hamburger menu after clicking on a nav link
for (i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', function() {
    navList.classList.remove('active');
    checkbox.checked = false;
    textBox.style.display = 'block';
  });
}
