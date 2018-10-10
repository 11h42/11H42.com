/*
function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
*/


$(document).ready(function () {

    var is_mobile = $(window).width() < 972;
    var header_menu = $('#header-menu');
    var header = $('#header');

    // setting the eight of the header when the image is already cached
    header.css('height', $('#cover-background').height());

    // setting the height of header when iamge finished loading
    $(window).on("load", function () {
        header.css('height', $('#cover-background').height());
    });

    // resizing the header on window resize
    $(window).on("resize", function () {
        header.css('height', $('#cover-background').height());
        $(document).trigger('scroll');
    });

    // toggle class on carousel control click
    $('.carousel-ctrl').click(function (event) {
        event.preventDefault();
        $('#realisations').toggleClass('clients-visible');
    });


    $('.burger-button').click(function () {
        header_menu.toggleClass('visible');
    });


    // updating the header on window scroll (position, tabs)
    $(document).scroll(function () {
        if ($(document).scrollTop() >= header.offset().top + header.outerHeight() - $('#menu-list').outerHeight()) {
            if (header_menu.hasClass('absolute') && !is_mobile)
                header_menu.removeClass('absolute').hide().addClass('fixed').slideDown();

            $('#header-menu').find('ul a').each(function () {
                if ($(document).scrollTop() >= $($(this).attr('href')).offset().top - 60) {
                    $('#header-menu').find('ul a').not(this).removeClass('selected');
                    $(this).addClass('selected');
                }
            });
        } else {
            if (header_menu.hasClass('fixed') && !is_mobile)
                header_menu.removeClass('fixed').hide().addClass('absolute').fadeIn(400);
            $('#header-menu').find('ul a').removeClass('selected');
        }
    });

    // smooth scrolling on menu tab click
    header_menu.find('a').click(function (event) {
        event.preventDefault();

        var target = $($(this).attr('href'));
        var _this = $(this);

        if (is_mobile) {
            header_menu.removeClass('visible');
        }

        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1500, function () {
            _this.addClass('selected');
            header_menu.find('ul a').not(_this).removeClass('selected');

        });
    });
});


function load_gmap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}