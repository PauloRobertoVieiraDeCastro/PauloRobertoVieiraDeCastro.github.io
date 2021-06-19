 $('.shark').click(function (e) {
  e.preventDefault()
    $('html, body').animate({
      scrollTop: $('#inicio').offset().top
    }, 1500);
  });