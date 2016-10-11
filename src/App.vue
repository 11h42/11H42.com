<template>
    <div id="app">
        <navbar :items="navItems"></navbar>
        <navbar-floating :items="navItems"></navbar-floating>
        <navbar-mobile :items="navItems"></navbar-mobile>

        <cover class="masthead">
            <span slot="header" class="m-x-auto ">
                Solution <abbr title="Système d'information de gestion des ressources humaines">SIRH</abbr>
            </span>
            <small slot="header-subtitle">3 logiciels RH en <b>1</b>.</small>
        </cover>

        <main>
            <section id="accelerez" class="ui vertical stripe segment">
                <div class="ui middle aligned stackable grid container">
                    <mon-idee></mon-idee>
                    <div class="ui divider"></div>
                    <ensemble></ensemble>
                </div>
            </section>
        </main>
    </div>
</template>
<script type="text/ecmascript-6">
    import semanticUi from '../node_modules/semantic-ui/dist/semantic.min'
    import Navbar from './components/navbar-top';
    import NavbarFloating from './components/navbar-floating';
    import NavbarMobile from './components/navbar-mobile';
    import Cover from './components/cover'
    import MonIdee from './components/mon-idee'
    import Ensemble from './components/ensemble'

    export default {
        components: {
            Navbar,
            NavbarFloating,
            NavbarMobile,
            Cover,
            MonIdee,
            Ensemble
        },
        data () {
            return {
                navItems: [
                    {'id': '#demarrez', 'label': 'Acceuil'},
                    {'id': '#accelerez', 'label': 'Accélérez!'},
                    {'id': '#projets-overview', 'label': 'Projets'},
                    {'id': '#avis-clients', 'label': 'Clients'},
                    {'id': '#notre-équipe', 'label': 'Équipe'},
                    {'id': '#contact', 'label': 'Contact'}
                ]
            }
        }
    }
</script>

<style>
    @import '../node_modules/semantic-ui/dist/semantic.min.css';

    #accelerez #ensemble {
        margin-top: 4em;
    }

</style>
