<script>
import feather from "feather-icons";
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../../data/projects";

export default {
  components: { ProjectSingle },
  props: ["fromHome"],
  data: () => {
    return {
      projects,
    };
  },
  computed: {
    allprojects() {
      if (this.fromHome) {
        return projects.slice(0, 3);
      }
      return projects;
    },
    projectsHeading() {
      if (this.fromHome) {
        return "Projects";
      }
      return "Projects Portfolio";
    },
  },
  mounted() {
    feather.replace();
  },
};
</script>

<template>
  <!-- Projects grid -->
  <section class="pt-10 sm:pt-14">
    <!-- Projects grid title -->
    <div class="text-center mb-12">
      <p
        class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
      >
        {{ projectsHeading }}
      </p>
    </div>

    <!-- Projects grid -->
    <div
      class="flex sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 flex-col items-center"
    >
      <ProjectSingle
        v-for="project in allprojects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped></style>
