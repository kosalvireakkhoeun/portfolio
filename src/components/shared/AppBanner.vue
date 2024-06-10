<script>
import feather from "feather-icons";

export default {
  name: "Home",
  data: () => {
    return {
      theme: "",
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <section
    class="flex flex-col sm:justify-between justify-center items-center sm:flex-row mt-12 sm:mt-10"
    style="height: 36rem"
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/2 text-left order-2 md:order-1 mt-12 md:mt-0">
      <h1
        class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
      >
        Hi, I'm Kosalvireak
      </h1>
      <p
        class="font-general-medium mt-3 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        A Full-Stack Developer
      </p>
      <p
        class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        A Code Enthusiast
      </p>
      <div class="flex justify-center sm:block">
        <a
          download="Stoman-Resume.pdf"
          href="/files/Stoman-Resume.pdf"
          class="hover-effect flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          aria-label="Download Resume"
        >
          <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm sm:text-lg font-general-medium duration-100"
            >Download CV</span
          ></a
        >
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-1/2 text-right float-right order-1 p-5">
      <img
        src="@/assets/images/cover.jpg"
        alt="Developer"
        class="rounded-xl w-auto h-auto"
      />
    </div>
  </section>
</template>

<style scoped>
</style>
