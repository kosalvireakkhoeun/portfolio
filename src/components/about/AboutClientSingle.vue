<script>
export default {
  props: ["client"],
};
</script>

<template>
  <div class="flex flex-col items-center justify-center py-5 hover-effect">
    <a :href="client.url" target="_blank">
      <img
        :src="client.img"
        :alt="client.title"
        class="w-52 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"
      />
    </a>
    <p
      class="font-general-medium text-lg sm:text-xl text-center sm:text-left leading-none text-primary-dark dark:text-primary-light"
    >
      {{ client.title }}
    </p>
  </div>
</template>

<style lang="css" scoped>
.hover-effect:hover p {
  text-decoration: underline;
}
</style>
