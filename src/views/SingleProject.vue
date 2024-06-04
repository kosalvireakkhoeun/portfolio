<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import { projectsDetail } from "../data/projectsDetail";

export default {
  name: "Projects",
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
  },
  data() {
    return { detail: projectsDetail };
  },
  computed: {
    project() {
      return this.detail[this.$route.params.id - 1];
    },
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="project.singleProjectHeader" />

    <!-- Project gallery -->
    <ProjectGallery :projectImages="project.projectImages" />

    <!-- Project information -->
    <ProjectInfo :projectInfo="project.projectInfo" />
  </div>
</template>

<style scoped></style>
