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

            <nos-participations></nos-participations>

            <avis-clients></avis-clients>

            <nos-realisations></nos-realisations>

        </main>
        <analytics></analytics>
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
    import NosParticipations from './components/nos-participations'
    import NosRealisations from './components/nos-realisations'
    import AvisClients from './components/avis-clients'
    import Analytics from './components/analytics'

    export default {
        components: {
            Navbar,
            NavbarFloating,
            NavbarMobile,
            Cover,
            MonIdee,
            Ensemble,
            NosParticipations,
            AvisClients,
            NosRealisations,
            Analytics
        },
        data () {
            return {
                navItems: [
                    {'id': '#demarrez', 'label': 'Acceuil'},
                    {'id': '#accelerez', 'label': 'Accélérez!'},
                    {'id': '#nos-participations', 'label': 'Projets'},
                    {'id': '#avis-clients', 'label': 'Clients'},
                    {'id': '#notre-équipe', 'label': 'Équipe'},
                    {'id': '#contact', 'label': 'Contact'}
                ],
            }
        }
    }
</script>

<style>
    @import '../node_modules/semantic-ui/dist/semantic.min.css';
    @import "assets/styles/semantic-ui-helpers.css";

    .ui.vertical.segment {
        border-bottom: none;
    }

    .ui.vertical.stripe {
        padding: 4em 0 8em;
    }

    .ui.vertical.stripe h3 {
        font-size: 1.5em;
    }

    .ui.vertical.stripe p {
        font-size: 1.33em;
    }

    #accelerez #ensemble {
        margin-top: 4em;
    }

    .center-avatar {
        display: flex;
        align-items: center;
        align-content: center;
    }

    .cards .no-border.card,
    .cards .no-border.card:hover,
    .link.cards .no-border.card:hover {
        border-color: transparent;
        box-shadow: 0 1px 3px 0 transparent, 0 0 0 1px transparent;
    }

    .cards .no-border.card .image,
    .cards .no-border.card:hover .image,
    .link.cards .no-border.card:hover .image {
        background-color: transparent;
    }
</style>
