<template>
  <div class="bg-white pb-32">
    <section class="pt-36 pb-48 bg-green-100">
      <div
        class="w-full px-4 space-y-2 flex flex-col items-center justify-center"
      >
        <p class="font-bold text-4xl">{{ $t("getTouchSection.mainTitle") }}</p>
        <p class="text-center">{{ $t("contactPage.mainTitleSub") }}</p>
      </div>
    </section>
    <div class="contact-card">
      <div class="contact-card-part">
        <div class="contact-information-box hover:text-white">
        <p class="text-2xl font-medium">
          {{ $t("contactPage.contactInformation") }}
        </p>
        <p class="font-light">
          {{ $t("address") }}
        </p>
        <div class="flex items-center pt-4 space-x-3">
          <location-icon />
          <p class="font-semibold">{{ $t("contactPage.regency") }}</p>
        </div>
        <div class="flex items-center pt-4 space-x-3">
          <phone-icon />
          <p class="font-semibold">{{ $t("contactPage.phone") }}</p>
        </div>
        <div class="flex items-center pt-4 space-x-3">
          <mail-icon />
          <p class="font-semibold">{{ $t("contactPage.mail") }}</p>
        </div>
      </div>
     </div>
    
      <div class="w-full md:w-2/3 px-0 md:px-20 py-8 md:py-10 space-y-2">
        <!-- Empty State -->
        <div
          v-if="isSending"
          class="flex flex-col justify-center w-full px-2 md:px-24 py-24"
        >
          <smiley-icon />
          <p class="text-center font-semibold text-lg">
            Terima kasih telah mengirimkan pesan, akan kami tanggapi dalam waktu
            dekat.
          </p>
        </div>
        <!-- Form -->
        <loading v-if="loading" class="w-full" />
        <div v-if="!loading && !isSending" class="p-4 space-y-2">
          <p>{{ firebaseError }}</p>
          <div class="w-full space-y-1">
            <p :class="errors.includes('name') ? 'text-error' : ''">
              {{ $t("getTouchSection.name") }}
            </p>
            <input
              v-model="name"
              name="name"
              :class="errors.includes('name') ? 'ring-error' : ''"
              class="form-input"
            />
          </div>
          <div class="w-full space-y-1">
            <p :class="errors.includes('email') ? 'text-error' : ''">
              {{ $t("getTouchSection.mail") }}
            </p>
            <input
              v-model="email"
              name="email"
              :class="errors.includes('email') ? 'ring-error' : ''"
              class="form-input"
            />
          </div>
          <div class="w-full space-y-1">
            <p :class="errors.includes('message') ? 'text-error' : ''">
              {{ $t("getTouchSection.message") }}
            </p>
            <textarea
              v-model="message"
              name="message"
              rows="4"
              :class="errors.includes('message') ? 'ring-error' : ''"
              class="form-input"
            ></textarea>
          </div>
          <div class="w-full">
            <button class="submit-button" @click="submitMessageContact">
              {{ $t("getTouchSection.submit") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LocationIcon from "./../../components/icons/LocationIcon.vue";
import PhoneIcon from "./../../components/icons/PhoneIcon.vue";
import MailIcon from "./../../components/icons/MailIcon.vue";
import SmileyIcon from "./../../components/icons/SmileyIcon.vue";
import Loading from "./../../components/commons_component/Loading.vue";

export default {
  name: "Home",
  components: {
    LocationIcon,
    PhoneIcon,
    MailIcon,
    SmileyIcon,
    Loading,
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      errors: [],
      firebaseError: null,
      loading: false,
      isSending: false,
    };
  },
  methods: {
    submitMessageContact: function () {
   return console.log('ff')
    },
  },
};
</script>

<style lang="postcss">
.contact-card {
  @apply flex flex-col
        md:flex-row
        items-stretch
        mx-4
        md:mx-10
        lg:mx-48
        -mt-28
        bg-white
        rounded-3xl
        shadow-lg
        p-2;
}

.contact-information-box {
  margin: 30px;
  @apply bg-gradient-to-t
          from-green-400
          to-green-600
          items-center
          rounded-3xl
          w-full
        
          p-6
          text-green-100
          space-y-1;
}


.ring-error {
  @apply ring-2 ring-red-400;
}

.text-error {
  @apply text-red-400 font-medium;
}
.contact-card-part {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media only screen and (max-width: 600px) {
  .contact-information-box {
    margin: 0;
  }
}
</style>
