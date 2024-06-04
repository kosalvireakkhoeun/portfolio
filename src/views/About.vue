<script>
import AboutMe from "@/components/about/AboutMe";
import Tech from "@/components/about/Tech";
import feather from "feather-icons";

export default {
  name: "About",
  components: {
    AboutMe,
    Tech,
  },
  data: () => {
    return {};
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
  <div>
    <!-- About me -->
    <div class="mx-auto">
      <AboutMe />
    </div>

    <!-- About Client -->
    <Tech />
  </div>
</template>

<style scoped></style>
