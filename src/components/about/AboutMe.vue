<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "Fueled by a passion for code and a love for exploration, I'm a self-taught Full-Stack Developer with a strong foundation in Information Technology Engineering. Earning my degree from the Royal University of Phnom Penh and a 2-year Higher Diploma in Software Development at E2stem Higher Diploma honed my technical skills and problem-solving abilities.",
        },
        {
          id: 2,
          bio: " I thrive on challenges and enjoy tackling projects from the ground up, evidenced by my experience in building various Web Applications. My enthusiasm for learning new technologies fuels my constant growth, and I'm always eager to contribute innovative solutions to bridge the gap between your vision and reality. Dive into my portfolio to see how I can turn your ideas into reality.",
        },
      ],
    };
  },
};
</script>

<template>
  <div
    class="block sm:flex sm:gap-10 mt-10 sm:mt-20 items-center h-auto md:h-96"
  >
    <!-- About profile image -->
    <div
      class="w-full sm:w-2/4 lg:w-1/4 mb-7 sm:mb-0 flex justify-center md:justify-start"
    >
      <img
        src="@/assets/images/profile.jpg"
        class="rounded-xl h-80 w-auto"
        alt="Kosalvireak's Photo"
      />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-2/4 lg:w-3/4 text-left">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-sm lg:text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
