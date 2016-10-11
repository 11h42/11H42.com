<template>
    <div>
        <h4 id="nos-participations" class="ui horizontal divider header grey">
            <a href="#nos-participations">
                #<i class="fitted yellow wizard icon"></i>
                <span class="text">Nos participations</span>
            </a>
        </h4>
        <section class="ui vertical stripe segment">
            <div class="ui centered grid text container">
                <div class="ui three stackable cards centered aligned">
                    <div v-for="project in projects" class="ui centered no-border card">
                        <div :class="['image', project.id]">
                            <a :href="'#' + project.id" class="center-avatar">
                                <img class="ui centered image"
                                     :src="resolve(project.image)"
                                     :alt="project.altText"
                                >
                            </a>
                        </div>
                        <div class="content">
                            <a :href="project.id" class="meta">{{project.label}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        props: {
            projects: {type: Object, required: true}
        },
        methods: {
            resolve: function (image) {
                console.log(image);
                return require('../' + image)
            }
        }
    }
</script>
<style>
    #nos-participations + section .card > .image > a {
        height: 200px;
    }

    #nos-participations + section .akemail img {
        width: 160px;
    }

    #nos-participations + section .apidae img {
        width: 160px;
    }

</style>