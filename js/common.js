$(document).ready(function(){

  AOS.init();

  $('.phone_us').mask('+7 (000) 000-0000');

  // range slider START
  jQuery('.calculator-range-item').range2DSlider({
   template: 'horizontal',
   round: true,
   onlyGridPoint: true,
   showLegend: false,
   axis:[ [0, 50] ]
 });
  // range slider END

  // callback magnific popup START
  $('.callback').magnificPopup({
    type: 'inline',
    delegate: 'a',
    mainClass: 'mfp-fade',
    removalDelay: 500,

    callbacks: {
      close: function() {
        $('.callback-form-succes').delay(1800).hide();
        $('.callback-form-wrap').delay(1800).show();
      }
    }
  });
  // callback magnific popup END

  //E-mail Ajax Send START
  $("#callback-form").submit(function() { 
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize(),
    }).done(function() {
      $('.callback-form-wrap').slideUp();
      $('.callback-form-succes p').css('opacity', '0');
      $('.callback-form-succes').delay(200).slideDown();
      $('.callback-form-succes p').delay(500).animate({ 'opacity': '1' }, 500);
      setTimeout(function() {
        $.magnificPopup.close();
      }, 3500);
    });
    return false;
  });

  // about video magnific START
  $(function() {
    $('.about-video-wrap').magnificPopup({
      type: 'iframe',
      delegate: 'a',
    });
  });
  // about video magnific END

  // services gallery magnific START
  $(function() {
    $('.gallery-grid').magnificPopup({
      type: 'image',
      delegate: 'a',
      gallery : {
        enabled: true,
      },
    });
  });
  // services gallery magnific END


  // partners owl START
  $(function() {
    $('.partners-slider').owlCarousel({
      loop: true,
      margin: 45,
      dots: false,

      responsiveClass:true,
      responsive : {
        0 : {
          items: 1,
        },
        480 : {
          items: 3,
        },
        768 : {
          items: 4,
        },
        992 : {
          items: 6,
        },
      },
    });

    var partnersOwl = $('.owl-carousel');
    partnersOwl.owlCarousel();

    // next btn
    $('.partners-arrow-right').click(function(e) {
      e.preventDefault();
      partnersOwl.trigger('next.owl.carousel');
    })

    // prev btn
    $('.partners-arrow-left').click(function(e) {
      e.preventDefault();
      partnersOwl.trigger('prev.owl.carousel', [300]);
    })
  });
  // partners owl END

});