$(document).ready(() => {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $('.navbar').addClass("navbar-has-bg");
        } else {
            $('.navbar').removeClass("navbar-has-bg");
        }
    });

    $("#learn-more-button").click(() => {
        $("#learn-more-button").hide();
        $("#about-learn-more").fadeIn();
        $("#learn-less-button").fadeIn();
    });

    $("#learn-less-button").click(() => {
        $("#learn-less-button").fadeOut();
        $("#about-learn-more").fadeOut();
        $("#learn-more-button").fadeIn();
    });
});