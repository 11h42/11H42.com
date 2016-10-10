<template>
    <nav class="ui container">
        <ul class="ui large secondary inverted pointing menu">
            <a class="toc item"> <i class="sidebar icon"></i> </a>
            <li class="item" v-for="item in items">
                <a class="link" v-bind:href="item.id">{{item.label}}</a>
            </li>
        </ul>
    </nav>
</template>
<script type="text/ecmascript-6">
    export default {
        props: {
            items: {type: Array, required: true}
        },
    }
</script>
<style>
    .secondary.pointing.menu .toc.item {
        display: none;
    }

    @media only screen and (max-width: 700px) {
        .secondary.pointing.menu .item,
        .secondary.pointing.menu .menu {
            display: none;
        }

        .secondary.pointing.menu .toc.item {
            display: block;
        }
    }
</style>