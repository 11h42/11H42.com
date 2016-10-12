<template>
    <section id="demarrez" class="ui inverted vertical cover center aligned segment">
        <div class="ui container">
            <div class="ui large secondary inverted pointing menu">
                <a class="toc item">
                    <i class="sidebar icon"></i>
                </a>
                <a class="active item" href="#demarrez">Acceuil</a>
                <a class="item" href="#accelerez">Accélérez!</a>
                <a class="item" href="#nos-participations">Projets</a>
                <a class="item" href="#avis-clients">Clients</a>
                <a class="item" href="#notre-équipe">Équipe</a>
                <a class="item" href="#contact">Contact</a>
            </div>
        </div>

        <div class="ui text container">
            <h1 class="ui inverted header">
                Accélérateur de projets numériques à Bordeaux
            </h1>
            <br>
            <a class="ui huge positive button" href="#accelerez">
                Démarrez&thinsp;!<i class="right chevron right icon"></i>
            </a>
        </div>

        <footer class="meta image copyright">
                <span>
                    <img src="https://s.yimg.com/pw/images/icon-cc0.png"
                         class="cc0"
                         alt="Public Domain Dedication (CC0)"
                         title="Public Domain Dedication (CC0)">
                </span>
            <a href="https://creativecommons.org/publicdomain/zero/1.0/" title="Public Domain Dedication (CC0)">
                Some rights reserved</a> by
            <a href="https://flic.kr/p/qCNNpM">Official SpaceX Photos</a>
        </footer>
    </section>
</template>
<style>
    #demarrez {
        background-size: cover;
        background: url('../assets/images/masthead/masthead.jpg');
        min-height: 90vh;
        padding: 1em 0;
    }

    .cover .header {
        text-shadow: 2px 2px 2px #666;
    }

    .cover .logo.item img {
        margin-right: 1em;
    }

    .cover .ui.menu .ui.button {
        margin-left: 0.5em;
    }

    .cover h1.ui.header {
        margin-top: 25vh;
        margin-bottom: 0;
        font-size: 4.5rem;
        font-weight: normal;
    }

    @media only screen and (max-width: 700px) {
        .cover.segment {
            min-height: 350px;
        }

        .cover h1.ui.header {
            font-size: 2em;
            margin-top: 1.5em;
        }
    }

    .copyright {
        position: absolute;
        padding: .25em .5em;
        bottom: 0;
        right: 0;
        opacity: .7;
        transition: all .5s;
    }

    .copyright .cc0 {
        vertical-align: middle;
    }

    .copyright a {
        color: #aaa;
    }

    .copyright:hover {
        transition: all .5s;
        opacity: 1;
        background-color: #fff;
        color: #333;
    }

    .copyright:hover a {
        color: #4183C4;
        text-shadow: none;
    }
</style>
