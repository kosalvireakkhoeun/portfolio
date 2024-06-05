<script>
export default {
  props: ["project"],
};
</script>

<template>
  <router-link
    :to="`/projects/${project.id}`"
    class="hover-effect rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark w-auto h-96"
    aria-label="Single Project"
  >
    <div class="h-2/3 flex sm:justify-center md:justify-start">
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none h-full w-auto object-cover"
      />
    </div>
    <div class="text-center px-4 py-6 w-full">
      <p
        class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
      >
        {{ project.title }}
      </p>
      <span
        class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
        >{{ project.category }}</span
      >
    </div>
  </router-link>
</template>

<style lang="css" scoped>
</style>
