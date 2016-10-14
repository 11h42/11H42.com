<template>
    <div id="app">
        <navbar-floating :items="navItems"></navbar-floating>
        <navbar-mobile :items="navItems"></navbar-mobile>

        <div class="pusher">
            <cover :items="navItems">
            <span slot="header" class="m-x-auto ">
                Solution <abbr title="Système d'information de gestion des ressources humaines">SIRH</abbr>
            </span>
                <small slot="header-subtitle">3 logiciels RH en <b>1</b>.</small>
            </cover>

            <continue target="#accelerez"></continue>

            <main>
                <section id="accelerez" class="ui vertical stripe segment">
                    <div class="ui middle aligned stackable grid container">
                        <mon-idee></mon-idee>
                        <div class="ui divider"></div>
                        <ensemble></ensemble>
                    </div>
                </section>

                <nos-participations :projects="projects"></nos-participations>

                <avis-clients></avis-clients>

                <nos-realisations :projects="projects"></nos-realisations>

                <note-equipe></note-equipe>
            </main>

        </div>

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
    import MyFooter from './components/footer'
    import Analytics from './components/analytics'
        import Continue from './components/continue.vue';


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
            Continue,
            MyFooter,
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
                        id: 'akemail',
                        name: 'Akemail',
                        title: 'Akemail: solution d\'emailing',
                        image: 'assets/images/customers/akemail-logo.png',
                        website: 'http://www.akemail.fr/',
                        tags: ['emailing', 'webapp'],
                        description: `
                                <p>Gérez l’envoi et le suivi de vos emails pour vos applications web et plateformes de
                                    commerce en ligne.</p>
                            `,
                        callToAction: {class: 'primary basic', label: 'Découvrir Akemail'}
                    },
                    {
                        id: 'jepilote',
                        name: 'Je pilote mon entreprise',
                        title: 'Je pilote mon entreprise',
                        image: 'assets/images/customers/logo-jepilote.png',
                        website: 'http://www.jepilotemonentreprise.com/',
                        tags: ['gestion', 'entreprise'],
                        description: `
                                <p>Tout ce dont vous avez besoin pour gérer votre entreprise avec un logiciel de gestion en ligne gratuit et facile à utiliser.</p>
                            `
                    },
                    {
                        id: 'apidae',
                        name: 'Apidae',
                        title: `Apidae: <abbr title="Suivi d’activité">CRA</abbr>, congés/absences et notes de frais`,
                        image: 'assets/images/customers/apidae-logo.png',
                        website: 'http://www.apidae.biz/',
                        tags: ['RH', 'webapp'],
                        description: `
                                <p>Plus de prise de tête : déclarez votre activité au jour le jour en toute
                                    simplicité.</p>
                                <p>En quelques clics demandez vos congés et recevez la réponse par email dès que votre
                                    manager a répondu.</p>
                                <p>Sur votre smartphone à la fin du repas avec votre client envoyez la note de frais à
                                    votre employeur.</p>
                            `,
                        callToAction: {class: 'secondary basic', label: 'Voir l\'application'}
                    },
                    {
                        id: 'preva',
                        name: 'Preva',
                        title: 'PREVA: Évaluation et Prévention du risque en entreprise',
                        image: 'assets/images/customers/preva-logo.png',
                        website: 'http://www.preva.fr/',
                        tags: ['risque', 'document unique', 'webapp'],
                        description: `
                                <p>Outils d'élaboration du document unique pour les entreprises et les
                                    collectivités.</p>
                                <p>Il facilite l'élaboration du document unique et des plans de prévention.</p>
                            `
                    },
                    {
                        id: 'trace-etik',
                        name: 'Trace Etik',
                        title: 'Trace Etik: anti-contrefaçon, traçabilité &amp; marketing',
                        image: 'assets/images/customers/trace-etik-logo.png',
                        website: 'http://www.trace-etik.com/',
                        tags: ['traçabilité', 'anti-conntrefaçon', 'vins'],
                        description: `
                                <p>Solution de traçabilité pour le secteur viticole.</p>
                                <p>Le dispositif anticontrefaçon directement imprimable sur vos contre-étiquettes</p>
                            `
                    },
                    {
                        id: 'trilogie-sante',
                        name: 'Trilogie Santé',
                        title: 'Trilogie Santé: Organisation de congrès',
                        image: 'assets/images/customers/trilogie-sante-logo.png',
                        website: 'http://www.trilogie-sante.com/',
                        tags: ['santé', 'formation', 'emailing'],
                        description: `
                                <p>Spécialisée dans le secteur d'activité de l'organisation de foires, salons
                                    professionnels
                                    et congrès dans le domaine de la santé.</p>
                                <p><b>Akemail</b> est leur outil principal pour la gestion de leurs campagnes mails.</p>
                            `
                    },
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

    .continue {
        position: relative;
        bottom: 8vh;
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
