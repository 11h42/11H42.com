<template>
    <div>
        <h4 id="avis-clients" class="ui horizontal divider header grey">
            <a href="#avis-clients">
                #<i class="fitted red heart icon"></i>
                <span class="text">Avis clients</span>
            </a>
        </h4>
        <section class="ui vertical stripe container segment">
            <div class="ui twelve column grid text centered container">
                <div class="ui piled segment">
                    <div class="ui items">
                        <div class="item">
                            <div class="content">
                                <blockquote class="description">
                                    <h3>Notre boulot est bien fait quand les utilisateurs font des retours
                                        positifs.</h3>
                                </blockquote>
                                <p class="meta">
                                    <img class="ui avatar image"
                                         src="https://www.gravatar.com/avatar/e83458272a803773a53a048dd1b4aeb9?s=50&d=identicon"
                                         alt=""
                                         role="presentation"
                                    >
                                    <b>Édouard</b>, Concepteur UX & Dévelopeur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ui piled segment">
                    <div class="ui items">
                        <div class="item">
                            <div class="content">
                                <blockquote class="description">
                                    <h3>Avec le slider les clients adorent !</h3>
                                </blockquote>
                                <p class="meta">
                                    <img class="ui avatar image"
                                         src="../assets/images/customers/preva-ceo.jpg"
                                         alt=""
                                         role="presentation"
                                    >
                                    <b>François, </b> Directeur du <a href="#preva">groupe Preva</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ui piled segment">
                    <div class="ui items">
                        <div class="item">
                            <div class="content">
                                <blockquote class="description">
                                    <h3>Avec <b>Akemail</b>, j’ai rapidement obtenu des retours positifs sur mes
                                        actions
                                        marketing. Le
                                        dévouement et la disponibilité de l’équipe est vraiment un plus&nbsp;!
                                    </h3>
                                </blockquote>
                                <p class="meta">
                                    <img class="ui avatar image"
                                         src="../assets/images/customers/trilogie-sante-responsable-logistique.jpg"
                                         role="presentation"
                                         alt=""
                                    >
                                    <b>Catherine</b>, Responsable Logistique chez <a href="#trilogie-sante">Trilogie
                                    Santé</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style>
    #avis-clients + section {
        padding-top: 4em;
    }

    #avis-clients + section .piled.segment {
        margin: 2em 0;
    }

    #avis-clients + section blockquote:before {
        font-family: 'Icons';
        content: "\f10d";
        font-size: 4em;
        float: left;
        color: #DCDDDE;
        margin-left: 0;
        padding-right: 1rem;
    }

    #avis-clients + section blockquote > h3 {
        font-style: italic;
    }
</style>