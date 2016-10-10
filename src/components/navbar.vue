<template>
    <nav class="ui large top fixed hidden menu inverted">
        <ul class="ui container">
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
