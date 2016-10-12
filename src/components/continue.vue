<template>
    <div class="continue ui center aligned one column grid">
        <a :href="target" class="column">
            <span class="sr-only">{{target}}</span>
            <i class="angle down icon"></i>
        </a>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props: {
            target: {type: String, required: true}
        }
    }
</script>
<style>
    .continue, .continue a {
        color: #ddd;
    }

    .continue {
        position: absolute;
        width: 100%;
        height: 3em;
        z-index: 99;
        left: 0;
        bottom: 15vh;
    }

    .continue .icon {
        font-size: 6em;
        text-shadow: .1rem .1rem .5rem #000;
        opacity: .25;
    }
</style>
