$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            $('#backToTop').addClass('show');
        } else {
            $('#backToTop').removeClass('show');
        }
    });

    $('#backToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    let currentIndex = 0;
    const images = $('.carousel-img');
    const totalImages = images.length;

    function showNextImage() {
        images.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex + 1) % totalImages;

        setTimeout(function () {
            images.eq(currentIndex).addClass('active');
        }, 20);
    }

    setInterval(showNextImage, 5000);
});
