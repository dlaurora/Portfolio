$(document).ready(function() {
    // Smooth scroll when clicking on anchor links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 250);
        }
    });

    // Toggle mobile menu
    $('.menu-button').on('click', function() {
        $('nav').toggleClass('active');
    });

    // Show/hide header and menu button on scroll
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        var header = $('header');
        var menuButton = $('.menu-button');

        if (scrollTop === 0) {
            header.removeClass('fixed');
            menuButton.removeClass('hidden');
        } else {
            header.addClass('fixed');
            menuButton.addClass('hidden');
        }
    });
});

const isScrolling = () => {
    const headerEl = document.querySelector('.primary-header') 
    let windowPosition = window.scrolly > 250 
    headerEl.classList.toggle('active', windowPosition)
  }
  window.addEventListener('scroll', isScrolling)


  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    window.open("mailto:diegolaurora@gmail.com");
    resetFormFields();
  });
  

  function resetFormFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }