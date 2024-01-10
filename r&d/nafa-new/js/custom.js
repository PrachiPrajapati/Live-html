//Sticky Header
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 25) {
    $("header").addClass("sticky-header");
    $("body").addClass("active");
  }
  else {
    $("header").removeClass("sticky-header");
    $("body").removeClass("active");
  }
});

//WOW Js
new WOW().init();

//Top Scroll JS
$("a[href='#top']").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

//Loader JS
$(document).ready(
  setTimeout(function () {
      $('body').removeClass('loading');
      $('#loader').remove();
  }, 2000)
);

//Page Scroll
if (window.location.hash) scroll(0, 0);
setTimeout(function () { scroll(0, 0); }, 1);
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        if ($(window).width() < 768) {
          console.log("else executed 2");
          $('html, body').animate({
            scrollTop: target.offset().top - 64
          }, 1000);
        }
        else if ($(window).width() > 767 && $(window).width() < 1200) {

          $('html, body').animate({
            scrollTop: target.offset().top - 84
          }, 1000);

        }
        else if ($(window).width() > 1200) {

          $('html, body').animate({
            scrollTop: target.offset().top - 84
          }, 1000);

        }
        else {
          console.log("else executed");

          $('html, body').animate({
            scrollTop: target.offset().top - 10
          }, 1000);

        }
        return false;
      }
    }
  });
})

// Banner Slider
var $slider = $('.slideshow .slider'),
  maxItems = $('.item', $slider).length,
  dragging = false,
  tracking,
  rightTracking;

$sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

rightItems = $('.item', $sliderRight).toArray();
reverseItems = rightItems.reverse();
$('.slider', $sliderRight).html('');
for (i = 0; i < maxItems; i++) {
  $(reverseItems[i]).appendTo($('.slider', $sliderRight));
}
$slider.addClass('slideshow-left');
$('.slideshow-left').slick({
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  infinite: false,
  dots: true,
  speed: 1000,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

  if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems);
    $('.slideshow-text').slick('slickGoTo', -1);
  } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', -1);
    $('.slideshow-text').slick('slickGoTo', maxItems);
  } else {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
    $('.slideshow-text').slick('slickGoTo', nextSlide);
  }
})
  .on('mousedown touchstart', function () {
    dragging = true;
    tracking = $('.slick-track', $slider).css('transform');
    tracking = parseInt(tracking.split(',')[5]);
    rightTracking = $('.slideshow-right .slick-track').css('transform');
    rightTracking = parseInt(rightTracking.split(',')[5]);
  }).on('mousemove touchmove', function () {
    if ($(window).scrollTop() == 0) {
      var listItem = $(".slick-current");
      if (($(window).width() < 768) && jQuery(".item").index(listItem) == maxItems - 1) {
        // $('.slideshow-left').slick('unslick');
        // $('.slideshow-right').slick('unslick');
        $("body").css("overflow-y", "scroll");
        $("body").removeClass("show-menu");
        $('html, body').stop().animate({
          scrollTop: $(".courge-create-sec").position().top
        }, 1000, 'swing');
      }
      if (dragging) {
        newTracking = $('.slideshow-left .slick-track').css('transform');
        newTracking = parseInt(newTracking.split(',')[5]);
        diffTracking = newTracking - tracking;
        $('.slideshow-right .slick-track').css({ 'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')' });
      }
    }
  }).on('mouseleave touchend mouseup', function () {
    dragging = false;
  });
$('.slideshow-right .slider').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: false,
  speed: 950,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  initialSlide: maxItems - 1
});
$('.slideshow-text').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: false,
  speed: 900,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});

if ($(window).scrollTop() == 0) {
  // $("body").addClass("show-menu");
}
$('.slideshow-text .item a').on('click', function () {
  if ($(this).attr("href") != "#") {
    $("body").css("overflow-y", "scroll");
    $("body").removeClass("show-menu");
  }
});
$(document).ready(function () {
  $(document).on("mousewheel", '.slideshow-left, .item', function (event) {
    event.preventDefault();
    if ($(window).scrollTop() == 0) {
      $("body").addClass("show-menu");
      if (event.deltaX > 0 || event.deltaY < 0) {
        var listItem = $(".slick-current");
        // console.log("hello", jQuery(".item").index(listItem), maxItems);
        if (jQuery(".item").index(listItem) == maxItems - 1) {
          $("body").css("overflow-y", "scroll");
          $("body").removeClass("show-menu");
        } else {
          $(".slideshow-left").slick('slickNext');
        }
      } else if (event.deltaX < 0 || event.deltaY > 0) {
        $(".slideshow-left").slick('slickPrev');
      }
    }
  });
});

// Next slide on click a link of text
$(document).on("click", ".slideshow-text .item a", function(){
  if ($(this).attr("href") == "#") {
    $(".slideshow-left").slick('slickNext');
  }
});

// $(window).scroll(function (e) {
//   if ($(window).scrollTop() == 0) {
//     $('.slideshow-left').trigger('mousewheel');
//   }
//   if ($(window).scrollTop() > $(".chairman-sec").position().top) {
//     $(".scroll-top").css("visibility", "visible");
//   }
//   else {
//     $(".scroll-top").css("visibility", "hidden");
//   }
// });

// Navbar JS
$(document).ready(function () {
  $('.open-ic').on('click', function () {
    $('header').addClass('show-menu');
  });
  $('.close-ic').on('click', function () {
    $('header').removeClass('show-menu');
  });
  $(document).click(function(e){
    if (!$(e.target).hasClass("sidebar") && !$(e.target).parents().hasClass("sidebar") && !$(e.target).hasClass("open-ic") && !$(e.target).parents().hasClass("open-ic")) {
      $("header").removeClass("show-menu");
    }
  });
});
$(".navbar-toggler").click(function () {
  $(this).toggleClass("active");
});
$(".nav-item a").click(function () {
  $(".navbar-toggler").removeClass("active");
});
$(window).on('load', function () {
  $(".loader").fadeOut();
  $(".navbar-collapse").removeClass("show");
});
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
  l.addEventListener('click', () => { bsCollapse.toggle() })
})
// $(window).scroll(function () {
//   var scrollDistance = $(window).scrollTop();
//   // Assign active class to nav links while scolling
//   if (scrollDistance > $(".chairman-sec").offset().top - 500) {
//     $(".leadership-copyright").addClass("active");
//   } else {
//     $(".leadership-copyright").removeClass("active");
//   } 
//   $('.scroll-section').each(function (i) {
//     if ($(this).position().top - 90 <= scrollDistance) {
//       $('.sidebar-list li.active').removeClass('active');
//       $('.sidebar-list li').eq(i).addClass('active');
//       $('.scroll-section.active').removeClass('active');
//       $(this).addClass('active');      
//     }
//     if ($(this).position().top - 90 <= scrollDistance) {
//       $('.navbar-nav li.active').removeClass('active');
//       $('.navbar-nav li').eq(i).addClass('active');
//       $('.scroll-section.active').removeClass('active');
//       $(this).addClass('active')
//     }
//   });
// }).scroll();
$.fn.isInViewport = function () {
  let elementTop = $(this).offset().top;
  let elementBottom = elementTop + $(this).outerHeight();

  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();
  var height = $(window).height() / 2;

  return (elementBottom - height) > viewportTop && elementTop < viewportBottom;
};
$(window).scroll(function () {
  if ($(".submenu-sec").hasClass("active")) {
    $(".submenu").addClass("show");
  }
  else {
    $(".submenu").removeClass("show");
  }
  if ($(".submenu").hasClass("active")) {
    $(".submenu").addClass("show");
  }
  else {
    $(this).removeClass("show");
  }
  if ($(".giving-back-item").hasClass("active")) {
    $(".submenu").removeClass("show");
  }
});

$(".sidebar-list li a").click(function () {
  $(".submenu").removeClass("submenu-open");
  if (!$(this).parent().hasClass("submenu-sec")) {
    $("header").removeClass("show-menu");
  }
});

$(".submenu-sec a").click(function () {
  $(this).parent().siblings(".submenu").toggleClass("submenu-open");
});

// Add button class for desktopview in readmore
if ($(window).width() > 991) {
  $(".btn-readmore").addClass("button");
}
//Button Style
document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

//Readmore JS
$(document).ready(function () {
  $(document).on('click', '.read-more-btn button', function (e) {
    e.preventDefault();
    if($(this).hasClass('close_section')){
      $(this).removeClass('close_section');
      $(this).parents('.msg-txt').find(".more-msg-blk").slideUp("slow");
      $(this).html('<div><span>R</span><span>e</span><span>a</span><span>d</span><span> </span><span>m</span><span>o</span><span>r</span><span>e</span></div>');
    }else{
      // window.scrollTo(0, document.body.scrollHeight);
      $(this).parents('.msg-txt').find(".more-msg-blk").slideDown("slow");
      $(this).addClass('close_section');
      $(this).html('<div><span>C</span><span>l</span><span>o</span><span>s</span><span>e</span></div>');
    }
    // $(this).parent().html('<a href="javascript:void(0);" class="button close_section"><div><span>C</span><span>l</span><span>o</span><span>s</span><span>e</span></div></a>');
    // $(this).html('<div><span>C</span><span>l</span><span>o</span><span>s</span><span>e</span></div>');
  });

  // Scroll down when last read more clicked.
  // $(document).on('click', '.our-benefactors-sec .read-more-btn button, .our-scholars-sec .read-more-btn button',  function () {
  //   window.scrollTo(0, $(this).parent().parent().offset().top - 200);
  // });

  $(document).on('click', '#accordion .card .card-header .button',  function () {
    $accordian = $(this);
    setTimeout(function(){
      $('html, body').animate({
          scrollTop: $accordian.offset().top - 100
      }, 500);
    },400);
  });

  // // only for chaiman section
  $(document).on('click', '.chairman-sec .close_section', function () {
    window.location.href = "#our-leadership-sec"
  });

  // $(document).on('click', '.read-more-btn .button.close_section', function (e) {
  //   e.preventDefault();
  //   $('.msg-txt').removeClass('show-txt');
  //   $('.read-more-btn').html('<a href="javascript:void(0);" class="button"><div><span>R</span><span>e</span><span>a</span><span>d</span><span> </span><span>m</span><span>o</span><span>r</span><span>e</span></div></a>');
  // });
  
});

//Open House Slider
jQuery('.slider-1').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  dots: true,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2500
});
// portrait Slider
jQuery('.portrait-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  dots: true,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2500
});

//Couner JS
var counted = 0;
$(window).scroll(function () {
  $('.count').each(function () {
    if ($(window).scrollTop() > $(this).offset().top - window.innerHeight) {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },
        {
          duration: 2000,
          easing: 'swing',
          step: function () {
            var num = Math.ceil(this.countNum).toString();
            if (Number(num) > 999) {
              while (/(\d+)(\d{3})/.test(num)) {
                num = num.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
              }
            }
            $this.text(num);

          },
          complete: function () {
            var num = Math.ceil(this.countNum).toString();
            if (Number(num) > 999) {
              while (/(\d+)(\d{3})/.test(num)) {
                num = num.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
              }
            }
            $this.text(num);
            //alert('finished');
          }
        });
      $(this).removeClass('count');
    }
  });
});
// Scroll down remove class show menu
$(".header-action-btn").click(function(){
  $("body").removeClass("show-menu");
});