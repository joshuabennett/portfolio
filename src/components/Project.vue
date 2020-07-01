<template>
  <div class="project">
    <div class="before-expand">
      <div class="project-title">{{project.name}}</div>
      <img class="thumb" :src="'assets/' + project.subname + '-icon.svg'" />
      <div class="buttons-group">
        <transition name="fade">
          <button
            class="button more-info"
            @click="expand(project)"
            v-show="!isExpanded || curProject == project.subname"
          >
            <a>{{ title }}</a>
          </button>
        </transition>
        <button class="button">
          <a :href="`https://${project.link}`">CHECK IT OUT</a>
        </button>
      </div>
    </div>
    <transition name="fade-text">
      <div class="after-expand" v-show="isExpanded && curProject == project.subname">
        <span class="tag is-white" v-for="tool in project.tools" :key="tool">{{ tool }}</span>
        <p class="proj-info">{{ project.info }}</p>
        <a class="button github-button" :href="project.github">
          <span class="icon">
            <i class="fab fa-github"></i>
          </span>
          <span>GitHub</span>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["project"],
  methods: {
    expand(project) {
      this.$emit("update-project", project.subname);
      console.log(project.subname);
      this.$emit("update-expanded");
      this.curProject = project.subname;
      var projects = document.querySelectorAll(".project");
      if (this.isExpanded) {
        this.isExpanded = false;
        for (let i = 0; i < projects.length; i++) {
          if (!projects[i].classList.contains(this.curProject)) {
            projects[i].classList.remove("shrinked");
          } else {
            projects[i].classList.remove("expanded");
            projects[i].style.justifyContent = "center";
          }
        }
      } else {
        this.isExpanded = true;
        for (let i = 0; i < projects.length; i++) {
          if (!projects[i].classList.contains(this.curProject)) {
            projects[i].classList.add("shrinked");
          } else {
            projects[i].classList.add("expanded");
            projects[i].style.justifyContent = "flex-start";
          }
        }
      }

      this.title == "MORE INFO"
        ? (this.title = "LESS INFO")
        : (this.title = "MORE INFO");
    }
  },
  data: function() {
    return {
      title: "MORE INFO",
      curProject: "",
      isExpanded: false
    };
  }
};
</script>
