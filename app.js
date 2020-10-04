$(document).ready(() => {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $('.navbar').addClass("navbar-has-bg");
        } else {
            $('.navbar').removeClass("navbar-has-bg");
        }
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $("#learn-more-button").click(() => {
        $("#learn-more-button").hide();
        $("#image-learn-more").hide();
        $("#about-learn-more").fadeIn();
        $("#learn-less-button").fadeIn();
    });

    $("#learn-less-button").click(() => {
        $("#learn-less-button").fadeOut();
        $("#about-learn-more").fadeOut();
        $("#learn-more-button").fadeIn();
    });

    if (  $('.quote-loop').length ){
        (function loop() {
            $('.quote-loop').each(function() {
                var $self = $(this);
                $self.parent().queue(function (n) {
                    $self.fadeIn(1000).delay(5000).fadeOut(1000, n);
                });
            }).parent().promise().done(loop);
        }());
    }

    var testimonialsSlider = new Swiper('#testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },autoplay: {
            delay: 3000,
          },
    });
});

// Event listener on hash Change
window.addEventListener('hashchange', function () {
    let activeSectionName = window.location.hash.slice(1);
    activeSectionName = activeSectionName.charAt(0).toUpperCase() + activeSectionName.slice(1);
    $(`.navbar-nav li`).removeClass("active");

    if (!activeSectionName.length) {
        activeSectionName = "Home";
    }
    
    $(`.navbar-nav li a:contains('${activeSectionName}')`).parent().addClass("active");
}, false);
