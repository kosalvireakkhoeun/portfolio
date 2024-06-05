<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "I am a highly motivated individual with a strong work ethic and a commitment to excellence. I am determined to succeed and I am always looking for new challenges to help me grow both personally and professionally. I am passionate about learning new things and I enjoy discovering new ways to solve problems.",
        },
        {
          id: 2,
          bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div
      class="w-full sm:w-1/4 md:w-2/4 lg:w-1/4 mb-7 sm:mb-0 flex justify-center"
    >
      <img
        src="@/assets/images/profile.jpg"
        class="rounded-xl h-80 w-auto"
        alt="Kosalvireak's Photo"
      />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 md:w-2/4 lg:w-3/4 text-left">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
