<template>
    <div>
        <h4 id="nos-réalisations" class="ui horizontal divider header grey">
            <a href="#nos-réalisations">
                #<i class="fitted violet rocket icon"></i>
                <span class="text">Nos réalisations</span>
            </a>
        </h4>
        <section class="ui vertical stripe container segment">
            <div class="ui text container">
                <div class="ui items">
                    <article :id="project.id" v-for="project in projects" class="item">
                        <a class="ui small image" :href="project.website">
                            <img class="ui avatar image"
                                 :src="resolvePath(project.image)"
                                 :alt="project.altText"
                                 role="presentation"
                            >
                        </a>
                        <div class="content">
                            <h4 class="header">
                                <span v-html="project.header"></span>
                            </h4>
                            <div class="description">
                                <span v-html="project.description"></span>
                            </div>
                            <div v-if="project.callToAction" class="extra">
                                <a :href="project.website"
                                   :class="['ui', 'right', 'floated', project.callToAction.class, 'button']"
                                >
                                    {{project.callToAction.label}}
                                    <i class="right chevron icon"></i>
                                </a>
                            </div>
                            <div class="extra">
                                <div class="ui tag labels">
                                    <tag v-for="tag in project.tags" v-html="tag"></tag>
                                </div>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    </div>
</template>
<script type="text/ecmascript-6">
    import helpers from '../helpers'
    import Tag from '../components/tag'

    export default{
        props: {
            projects: {type: Array, required: true}
        },
        components: {
            Tag
        },
        methods: {
            resolvePath: helpers.resolvePath
        }
    }
</script>
<style>
    #apidae, #preva, #trace-etik, #trilogie-sante {
        margin-top: 6em;
    }
</style>