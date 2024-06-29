<script>
import feather from "feather-icons";

export default {
  props: ["projectInfo"],

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
    <!-- Single project left section details -->
    <div class="w-full sm:w-1/3 text-left">
      <!-- Single project objectives -->
      <div class="mb-7">
        <p
          class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-3"
        >
          Objective
        </p>
        <p
          class="font-general-regular text-lg text-primary-dark dark:text-ternary-light"
        >
          {{ projectInfo.objectivesDetails }}
        </p>
      </div>

      <!-- Single project technologies -->
      <div class="mb-7">
        <p
          class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-3"
        >
          Tools & Technologies
        </p>
        <p
          class="font-general-regular text-lg text-primary-dark dark:text-ternary-light"
        >
          {{ projectInfo.technologies[0].techs.join(", ") }}
        </p>
      </div>
    </div>

    <!-- Single project right section details -->
    <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
      <p
        class="font-general-medium text-primary-dark dark:text-ternary-light text-2xl mb-3"
      >
        Description
      </p>
      <p
        v-for="projectDetail in projectInfo.projectDetails"
        :key="projectDetail.id"
        class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
      >
        <span v-if="!projectDetail.url">{{ projectDetail.details }}</span>
        <a
          v-else
          :href="projectDetail.details"
          class="underline"
          target="__blank"
          >{{ projectDetail.details }}</a
        >
      </p>
      <p
        class="font-general-medium text-primary-dark dark:text-ternary-light text-xl mb-5"
      >
        Key Features
      </p>
      <ul class="ml-6">
        <li
          v-for="keyFeature in projectInfo.keyFeatures"
          :key="keyFeature.feature"
          class="font-general-regular mb-3 text-lg text-ternary-dark dark:text-ternary-light list-decimal"
        >
          <strong> {{ keyFeature.feature }} </strong> : {{ keyFeature.details }}
        </li>
      </ul>
    </div>
  </div>
</template>
