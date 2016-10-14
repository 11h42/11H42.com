<template>
    <div>
        <h4 id="call-to-action" class="ui horizontal divider header grey">
            <a href="#call-to-action">
                #<i class="fitted violet rocket icon"></i>
                <span class="text">Nous contacter</span>
            </a>
        </h4>
        <section class="ui vertical stripe container segment">
            <div class="ui container center aligned">
                <h3 class="ui huge header">
                    Envie d’un <em class="text purple">devis</em> ou simplement de poser une <em class="text orange">question</em>
                    ?
                </h3>
                <continue target="#call-to-action"></continue>

                <a href="mailto:contact@akema.fr" class="contact positive ui huge button">
                    <b>Contactez-nous</b>
                </a>
            </div>
        </section>
    </div>
</template>
<script type="text/ecmascript-6">
    import Continue from './continue';

    export default {
        components: {
            Continue
        }
    }
</script>
<style>
    #call-to-action {
        position: relative;
    }

    #call-to-action + section.ui.vertical.stripe .huge.header {
        font-size: 2.5rem;
        margin-top: 6rem;
    }

    #call-to-action + section.ui.vertical.stripe .huge.button {
        font-size: 2rem;
    }

    #call-to-action + section .contact {
        margin-top: 6rem;
        margin-bottom: 8rem;
    }

    #call-to-action + section .continue {
        top: 0;
        opacity: .5;
        top: -15vh;
    }
</style>
