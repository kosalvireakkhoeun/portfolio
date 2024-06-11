<script>
import { getDatabase, ref, set, push } from "firebase/database";
import LoaderVue from "../reusable/Loader.vue";
export default {
  components: { LoaderVue },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      isSuccess: false,
      isError: false,
      isLoading: false,
      error: "",
    };
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true;
      this.isSuccess = false;
      this.isError = false;
      const contact = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };
      try {
        const contactsRef = ref(getDatabase(), "contacts");
        const newContactRef = push(contactsRef);

        await set(newContactRef, contact);

        this.isSuccess = true;
        this.isLoading = false;
        this.clearForm();
      } catch (error) {
        this.isError = true;
        this.error = error.message;
      }
    },
    clearForm() {
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  },
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p
        class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
      >
        Have a project in mind? Let's talk!
      </p>
      <form
        @submit.prevent="handleSubmit"
        class="font-general-regular"
        autocomplete="off"
      >
        <label
          class="block text-lg text-primary-dark dark:text-primary-light my-2"
          for="name"
          >Full Name</label
        >
        <input
          class="mb-4 w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
          id="name"
          type="text"
          placeholder="Full-Name"
          v-model="name"
          required
          autocomplete="false"
        />
        <label
          class="block text-lg text-primary-dark dark:text-primary-light my-2"
          for="email"
          >Email</label
        >
        <input
          class="mb-4 w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
          id="email"
          type="email"
          placeholder="Email"
          v-model="email"
          required
          autocomplete="false"
        />
        <label
          class="block text-lg text-primary-dark dark:text-primary-light my-2"
          for="subject"
          >subject</label
        >
        <input
          class="mb-4 w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
          id="subject"
          type="text"
          placeholder="Subject"
          v-model="subject"
          required
          autocomplete="false"
        />
        <label
          class="block text-lg text-primary-dark dark:text-primary-light my-2"
          for="message"
          >Message</label
        >
        <textarea
          class="mb-4 w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
          id="message"
          name="message"
          placeholder="Message"
          v-model="message"
          cols="14"
          rows="6"
          autocomplete="false"
        ></textarea>

        <div class="mb-4 flex items-center">
          <button
            class="px-4 py-3 mr-5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
          >
            Send Message
          </button>
          <LoaderVue v-if="isLoading" />
        </div>
        <div v-if="isSuccess" class="text-primary-dark dark:text-primary-light">
          Message sent successfully!
        </div>
        <div v-if="isError" class="text-primary-dark dark:text-primary-light">
          Error sending message: {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
