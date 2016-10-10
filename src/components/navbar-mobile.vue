<template>
    <aside>
        <nav>
            <ul class="ui vertical inverted sidebar menu">
                <li class="item" v-for="item in items">
                    <a class="link" v-bind:href="item.id">{{item.label}}</a>
                </li>
            </ul>
        </nav>
    </aside>
</template>
<script type="text/ecmascript-6">
    export default {
        props: {
            items: {type: Array, required: true}
        },
    }
</script>