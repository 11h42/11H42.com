jQuery(document)
    .ready(function () {
        // create sidebar and attach to menu open
        jQuery('.ui.sidebar')
            .sidebar('attach events', '.toc.item')
        ;

        // lazy-load images
        jQuery('#notre-équipe').find('+ section .image img')
            .visibility({
                type: 'image',
                transition: 'fade in',
                duration: 1000
            })
        ;
    })
;