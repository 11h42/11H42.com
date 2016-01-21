$('#map').embed();

$(document)
    .ready(function () {

        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            })
        ;

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item')
        ;

        // lazy-load images
        $('#notre-équipe').find('+ section .image img')
            .visibility({
                type: 'image',
                transition: 'fade in',
                duration: 1000
            })
        ;
    })
;