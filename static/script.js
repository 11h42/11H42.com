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

function load_image_defered() {
	var eleFred = document.getElementById("img_fred");
	eleFred.src = "./static/images/avatars/fred.png";
	var eleCedr = document.getElementById("img_cedr");
	eleCedr.src = "./static/images/avatars/cedric.png";
	var eleJere = document.getElementById("img_jere");
	eleJere.src = "./static/images/avatars/jeremi.png";
	var eleMaxi = document.getElementById("img_maxi");
	eleMaxi.src = "./static/images/avatars/maxime.png";
	var eleIsab = document.getElementById("img_isab");
	eleIsab.src = "./static/images/avatars/isabelle.png";
	var eleMela = document.getElementById("img_mela");
	eleMela.src = "./static/images/avatars/melanie.png";
	var eleMaxe = document.getElementById("img_maxe");
	eleMaxe.src = "./static/images/avatars/Maxence.png";
	var eleMari = document.getElementById("img_mari");
	eleMari.src = "./static/images/avatars/Marie.png";
	
	var elePilot = document.getElementById("img_pilot");
	elePilot.src = "./static/images/logo_je_pilote_entreprise.png";
	var eleOverf = document.getElementById("img_overf");
	eleOverf.src = "./static/images/overfull.png";
	var eleTrace = document.getElementById("img_trace");
	eleTrace.src = "./static/images/logo_trace_etik.png";
	var elePreva = document.getElementById("img_preva");
	elePreva.src = "./static/images/logo-preva.png";
	
	var eleApidae = document.getElementById("img_apidae");
	eleApidae.src = "./static/images/apidae.png";
	var eleAkemail = document.getElementById("img_akemail");
	eleAkemail.src = "./static/images/akemail.png";
	
	var eleEntrep = document.getElementById("rea_entreprise");
	eleEntrep.src = "./static/images/logo-je-pilote-entreprise.png";
	var eleApidae = document.getElementById("rea_apidae");
	eleApidae.src = "./static/images/apidae.png";
	var elePreva = document.getElementById("rea_preva");
	elePreva.src = "./static/images/logo-preva.png";
	var eleAkemai = document.getElementById("rea_akemail");
	eleAkemai.src = "./static/images/akemail.png";
	var eleOverfu = document.getElementById("rea_overfull");
	eleOverfu.src = "./static/images/overfull.png";
	var eleTrilog = document.getElementById("rea_trilogie");
	eleTrilog.src = "./static/images/logo-trilogie.png";
	
	var eleAccomp = document.getElementById("img_accomp");
	eleAccomp.src = "./static/images/accompagnement.png";
	var eleFaiseb = document.getElementById("img_faisab");
	eleFaiseb.src = "./static/images/faisabilite.png";
	var eleCreati = document.getElementById("img_creati");
	eleCreati.src = "./static/images/creation.png";
	var eleAssist = document.getElementById("img_assist");
	eleAssist.src = "./static/images/assistance.png";
}