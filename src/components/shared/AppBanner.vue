<script>
import feather from "feather-icons";
import typingWords from "../../data/typingWords";
export default {
  name: "Home",
  data: () => {
    return {
      theme: "",
      wordIndex: 0,
      charIndex: 0,
      isDeleting: false,
      dynamicText: {
        textContent: "",
        classList: "",
      },
    };
  },
  methods: {
    typeEffect() {
      const words = typingWords;
      const currentWord = words[this.wordIndex];
      const currentChar = currentWord.substring(0, this.charIndex);
      this.dynamicText.textContent = currentChar;
      this.dynamicText.classList = "stop-blinking";

      if (!this.isDeleting && this.charIndex < currentWord.length) {
        this.charIndex++;
        setTimeout(this.typeEffect, 200);
      } else if (this.isDeleting && this.charIndex > 0) {
        this.charIndex--;
        setTimeout(this.typeEffect, 100);
      } else {
        this.isDeleting = !this.isDeleting;
        this.dynamicText.classList = "";
        this.wordIndex = !this.isDeleting
          ? (this.wordIndex + 1) % words.length
          : this.wordIndex;
        setTimeout(this.typeEffect, 1200);
      }
    },
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.typeEffect();
    this.theme = localStorage.getItem("theme") || "light";
  },
  updated() {
    feather.replace();
  },
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

      <h3
        class="font-general-medium mt-3 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        A
        <span :class="dynamicText.classList">{{
          dynamicText.textContent
        }}</span>
      </h3>
      <div class="flex justify-center sm:block">
        <a
          download="Vireak-Resume.pdf"
          href="/files/Vireak-Resume.pdf"
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
        alt="Kosalvireak At Bokor Moutain"
        class="rounded-xl w-auto h-auto"
      />
    </div>
  </section>
</template>

<style scoped>
h3 {
  font-size: 1.5rem;
  font-weight: 600;
}

h3 span {
  color: #6366f1;
  position: relative;
}

h3 span::before {
  content: "";
  height: 30px;
  width: 2px;
  position: absolute;
  top: 50%;
  right: -8px;
  background: #6366f1;
  transform: translateY(-45%);
  animation: blink 0.7s infinite;
}

h3 span.stop-blinking::before {
  animation: none;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
