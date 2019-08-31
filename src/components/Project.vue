<template>
    <div class='project'>
        <div class="project-title">{{project.name}}</div>
        <img class='thumb' :src="'../src/assets/' + project.subname + '-icon.svg'">
        <div class="buttons-group">
            <button class="button" @click='expand(project)'><a>MORE INFO</a></button>
            <button class="button"><a :href='"https://" + project.link'>CHECK IT OUT</a></button>
        </div>
    </div>
                    
                    <!-- <span class='tag tools is-info' v-for='tool in project.tools'>{{ tool }}</span> -->
                    <!-- <div class='overlay'>
                        <a href='#'><img :src="'../src/assets/github.svg'"></a>
                    </div> -->
</template>

<script>
export default {
    data: function() {
        return {
        }
    },
    props: ['project'],
    methods: {
        expand(project) {
            this.$emit('expanded', this.project);

        }
    }
}
</script>

<style>

</style>