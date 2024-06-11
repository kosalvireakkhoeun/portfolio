<script>
import Button from "../reusable/Button.vue";
export default {
  components: {
    Button,
  },
  props: ["singleProjectHeader"],
};
</script>

<template>
  <div>
    <!-- Project heading and meta info -->
    <div>
      <div class="flex flex-row items-start h-24">
        <p
          class="mr-auto font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light"
        >
          {{ singleProjectHeader.singleProjectTitle }}
        </p>
        <a
          :href="singleProjectHeader.url"
          target="_blank"
          class="h-12 ml-auto hover-effect font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
          aria-label="URL"
        >
          <Button :title="singleProjectHeader.github ? 'Github' : 'Demo'" />
        </a>
      </div>
    </div>
    <div class="flex">
      <div class="flex items-center mr-10">
        <i
          data-feather="clock"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          class="font-general-medium ml-2 leading-none text-primary-dark dark:text-ternary-light"
          >{{ singleProjectHeader.singleProjectDate }}</span
        >
      </div>
    </div>
  </div>
</template>
