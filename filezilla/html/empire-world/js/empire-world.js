$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 1) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });
    $(".search-icon").click(function () {
        $('.search-form').toggleClass('open');
        $('.autocomplete-container').toggleClass('open');
        $('body').toggleClass('overlay-open');
    });
});