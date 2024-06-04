<script>
import AboutClientSingle from "./AboutClientSingle.vue";

export default {
  components: {
    AboutClientSingle,
  },
  data: () => {
    return {
      clientsHeading: "TECH STACK",
      clients: [
        {
          id: 1,
          title: "HTML",
          img: require("@/assets/images/brands/html.svg"),
          url: "https://en.wikipedia.org/wiki/HTML",
        },
        {
          id: 2,
          title: "CSS",
          img: require("@/assets/images/brands/css.svg"),
          url: "https://en.wikipedia.org/wiki/CSS",
        },
        {
          id: 3,
          title: "JAVASCRIPT",
          img: require("@/assets/images/brands/javascript.svg"),
          url: "https://en.wikipedia.org/wiki/JavaScript",
        },
        {
          id: 4,
          title: "BOOTSTRAP",
          img: require("@/assets/images/brands/bootstrap.svg"),
          url: "https://getbootstrap.com/",
        },
        {
          id: 5,
          title: "TAILWINDCSS",
          img: require("@/assets/images/brands/tailwindcss.svg"),
          url: "https://tailwindcss.com/",
        },
        {
          id: 6,
          title: "VUEJS",
          img: require("@/assets/images/brands/vuejs.svg"),
          url: "https://vuejs.org/",
        },
        {
          id: 7,
          title: "LARAVEL",
          img: require("@/assets/images/brands/laravel.svg"),
          url: "https://laravel.com/",
        },
        {
          id: 8,
          title: "JAVA",
          img: require("@/assets/images/brands/java.svg"),
          url: "https://en.wikipedia.org/wiki/Java_(programming_language)",
        },
        {
          id: 9,
          title: "LIFERAY",
          img: require("@/assets/images/brands/liferay.svg"),
          url: "https://www.liferay.com/",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ clientsHeading }}
    </p>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-10 sm:mt-14 gap-2"
    >
      <AboutClientSingle
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>
