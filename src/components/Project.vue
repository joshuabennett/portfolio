<template>
  <li :id="`project-${project.subname}`" class="project" aria-expanded="false" aria-hidden="false">
    <div class="before-expand">
      <h3 class="project-title">{{project.name}}</h3>
      <img class="thumb" :src="'assets/' + project.subname + '-icon.svg'" />
      <ul class="buttons-group">
        <transition name="fade">
          <button
            :aria-controls="`project-${project.subname}`"
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
      </ul>
    </div>
    <transition name="fade-text">
      <div class="after-expand" v-show="isExpanded && curProject == project.subname">
        <ul>
          <li class="tag is-white" v-for="tool in project.tools" :key="tool">{{ tool }}</li>
        </ul>
        <p class="proj-info">{{ project.info }}</p>
        <a class="button github-button" :href="project.github">
          <span class="icon">
            <i class="fab fa-github"></i>
          </span>
          <span>GitHub</span>
        </a>
      </div>
    </transition>
  </li>
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
            projects[i].setAttribute("aria-hidden", "false");
          } else {
            projects[i].classList.remove("expanded");
            projects[i].setAttribute("aria-expanded", "false");
            projects[i].style.justifyContent = "center";
          }
        }
      } else {
        this.isExpanded = true;
        for (let i = 0; i < projects.length; i++) {
          if (!projects[i].classList.contains(this.curProject)) {
            projects[i].classList.add("shrinked");
            projects[i].setAttribute("aria-hidden", "true");
          } else {
            projects[i].classList.add("expanded");
            projects[i].setAttribute("aria-expanded", "true");
            projects[i].style.justifyContent = "flex-start";
          }
        }
      }

      this.title == "MORE INFO"
        ? (this.title = "LESS INFO")
        : (this.title = "MORE INFO");
    },
  },
  data: function () {
    return {
      title: "MORE INFO",
      curProject: "",
      isExpanded: false,
    };
  },
};
</script>
