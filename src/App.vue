<template>
    <div id="app">
        <navbar-floating :items="navItems"></navbar-floating>
        <navbar-mobile :items="navItems"></navbar-mobile>

        <cover class="masthead">
            <span slot="header" class="m-x-auto ">
                Solution <abbr title="Système d'information de gestion des ressources humaines">SIRH</abbr>
            </span>
            <small slot="header-subtitle">3 logiciels RH en <b>1</b>.</small>
        </cover>

        <main class="pusher">
            <section id="accelerez" class="ui vertical stripe segment">
                <div class="ui middle aligned stackable grid container">
                    <mon-idee></mon-idee>
                    <div class="ui divider"></div>
                    <ensemble></ensemble>
                </div>
            </section>

            <nos-participations :projects="projects"></nos-participations>

            <avis-clients></avis-clients>

            <nos-realisations></nos-realisations>

            <note-equipe></note-equipe>

        </main>

        <my-footer></my-footer>
        <analytics></analytics>
    </div>
</template>
<script type="text/ecmascript-6">
    import Navbar from './components/navbar-top';
    import NavbarFloating from './components/navbar-floating';
    import NavbarMobile from './components/navbar-mobile';
    import Cover from './components/cover'
    import MonIdee from './components/mon-idee'
    import Ensemble from './components/ensemble'
    import NosParticipations from './components/nos-participations'
    import NoteEquipe from './components/note-equipe'
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
            NoteEquipe,
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
                projects: [
                    {
                        id: 'trilogie-sante',
                        label: 'Trilogie Santé',
                        altText: 'triologie santé (événementielle)',
                        image: 'assets/images/customers/trilogie-sante-logo.png',
                    },
                    {
                        id: 'preva',
                        label: 'Preva',
                        altText: 'Preva (prévention du risque)',
                        image: 'assets/images/customers/preva-logo.png',
                    },

                    {
                        id: 'trace-etik',
                        label: 'Trace Etik',
                        altText: 'Trace-Etik (traçabilité et anti-contrefaçon)',
                        image: 'assets/images/customers/trace-etik-logo.png',
                    },
                    {
                        id: 'akemail',
                        label: 'Akemail',
                        altText: 'Akemail (envoi d\'e-mail)',
                        image: 'assets/images/customers/akemail-logo.png',
                    },
                    {
                        id: 'apidae',
                        label: 'Apidae',
                        altText: 'Apidae (solutions SIRH)',
                        image: 'assets/images/customers/apidae-logo.png',
                    }
                ]
            }
        }
    }
</script>

<style>
    @import '../node_modules/semantic-ui/dist/components/reset.css';
    @import '../node_modules/semantic-ui/dist/components/site.css';
    @import '../node_modules/semantic-ui/dist/components/button.css';
    @import '../node_modules/semantic-ui/dist/components/container.css';
    @import '../node_modules/semantic-ui/dist/components/divider.css';
    @import '../node_modules/semantic-ui/dist/components/header.css';
    @import '../node_modules/semantic-ui/dist/components/icon.css';
    @import '../node_modules/semantic-ui/dist/components/image.css';
    @import '../node_modules/semantic-ui/dist/components/label.css';
    @import '../node_modules/semantic-ui/dist/components/list.css';
    @import '../node_modules/semantic-ui/dist/components/segment.css';
    @import '../node_modules/semantic-ui/dist/components/step.css';
    @import '../node_modules/semantic-ui/dist/components/grid.css';
    @import '../node_modules/semantic-ui/dist/components/menu.css';
    @import '../node_modules/semantic-ui/dist/components/card.css';
    @import '../node_modules/semantic-ui/dist/components/item.css';
    @import '../node_modules/semantic-ui/dist/components/embed.css';
    @import '../node_modules/semantic-ui/dist/components/sidebar.css';
    @import '../node_modules/semantic-ui/dist/components/sticky.css';
    @import '../node_modules/semantic-ui/dist/components/transition.css';
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

    #ensemble {
        margin-top: 4em;
    }

    .center-avatar {
        display: flex;
        align-items: center;
        align-content: center;
    }

    .divider.header .text, .divider.header .icon {
        color: #999;
    }

    .divider.header:hover .text {
        color: #1e70bf;
    }

    .divider.header .icon {
        padding-right: .25em;
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
