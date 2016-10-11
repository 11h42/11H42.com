<template>
    <footer id="contact" class="ui inverted vertical footer segment">
        <div class="ui container">
            <div class="ui stackable inverted divided equal height stackable grid">
                <section class="five wide column">
                    <contact-us></contact-us>
                </section>
                <section class="five wide column">
                    <our-address></our-address>
                </section>
                <!--<section class="four wide column">-->
                <!--<our-services></our-services>-->
                <!--</section>-->
                <section class="six wide column">
                    <map-to-office></map-to-office>
                </section>
            </div>
            <div class="ui two column centered grid">
                <section class="sixteen wide column center aligned">
                    <attribution></attribution>
                </section>
            </div>
        </div>
    </footer>
</template>
<script type="text/ecmascript-6">
    import OurAddress from './our-address';
    import ContactUs from './contact-us';
    import MapToOffice from './map-to-office';
    import OurServices from './our-services';
    import Attribution from './attribution';

    export default {
        components: {
            OurAddress,
            ContactUs,
            MapToOffice,
            OurServices,
            Attribution
        }
    }
</script>
<style>
    .footer.segment {
        padding: 3rem 0 1rem;
    }

    .footer.segment address {
        font-style: normal;
    }

    .bg-inverse {
        color: white;
    }

    .bg-inverse a {
        color: hsla(0, 0%, 100%, 0.5);
    }

    .footer {
        padding-top: 3rem;
    }
</style>
