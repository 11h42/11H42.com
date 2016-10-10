<template>
    <div id="app">
        <navbar :items="navItems"></navbar>

    </div>
</template>
<script type="text/ecmascript-6">

    export default {
        components: {
            Navbar,
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
</style>
