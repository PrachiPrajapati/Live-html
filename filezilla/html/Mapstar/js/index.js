// on scroll add class 
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 20) {
        $(".header").addClass("sticky");
    } else {
        $(".header").removeClass("sticky");
    }
});

// smooth scroll
$(function () {
    $('a[href*=\\#]:not([href=\\#])').on('click', function () {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 600);
            return false;
        }
    });
});

$(document).ready(function () { 
    $(".navbar-nav .nav-link").click(function () {
        console.log("hello");
        $(".navbar-nav .nav-link").removeClass("active");
        $(this).addClass("active");
    });
    $(".custom-pagination a").click(function () {
        $(".custom-pagination a").removeClass("active");
        $(this).addClass("active");
    });
    $(".navbar-toggler").click(function () {
        $(".header").toggleClass("bg-change");
    });
    $('.modal-bg').on("click", function (e) {
        var color = $(this).attr('data-color');
        var colorBackdrop = 'modal-backdrop-' + color;
        // alert(color);
        $('.modal-backdrop').addClass(colorBackdrop);
    });
    $('.btn-close, .modal').on("click", function (e) {
        var color = $('.in').attr('data-color');
        var activeBackdrop = 'modal-backdrop-' + color;
        $('.modal-backdrop').removeClass(activeBackdrop);
    });

    $('.filter-icon').on("click", function () {
        $(".filter-content-mobile").toggleClass("slide-left");
    });
    // document.getElementById('vid').play();  

    $(".load-more-btn").click(function () {
        $(".more-text").slideToggle();
        $(this).text(function(i, text){
            return text === "View All" ? "View Less" : "View All";
        })
    });

    $(".zoom-out").click(function () { 
        $(".second-part .card-wrapper").children(".col-lg-4").removeClass("col-lg-4").addClass("col-lg-3");
        $(".second-part .card-wrapper").addClass("child-four fade-in-image-4").removeClass("fade-in-image-3");
    });
    $(".zoom-in").click(function () { 
        $(".second-part .card-wrapper").children(".col-lg-3").removeClass("col-lg-3").addClass("col-lg-4");
        $(".second-part .card-wrapper").removeClass("child-four fade-in-image-4").addClass("fade-in-image-3"); 
    });
    $(".custom-btn-grp .custom-tab-btn").click(function () { 
        $(".custom-btn-grp .custom-tab-btn").removeClass("active");
        $(this).addClass("active");
    });
});



