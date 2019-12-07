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
        $("#image-learn-more").hide();
        $("#about-learn-more").fadeIn();
        $("#learn-less-button").fadeIn();
        $("#image-learn-less").fadeOut();
        $("#image-learn-more").fadeIn();
    });

    $("#learn-less-button").click(() => {
        $("#learn-less-button").fadeOut();
        $("#about-learn-more").fadeOut();
        $("#learn-more-button").fadeIn();
        $("#image-learn-more").fadeOut();
        $("#image-learn-less").fadeIn();
    });
});

window.addEventListener('hashchange', function () {
    let activeSectionName = window.location.hash.slice(1);
    activeSectionName = activeSectionName.charAt(0).toUpperCase() + activeSectionName.slice(1);

    $(`.navbar-nav li`).removeClass("active");

    if (!activeSectionName.length) {
        activeSectionName = "Home";
    }

    $(`.navbar-nav li a:contains('${activeSectionName}')`).parent().addClass("active");
}, false);