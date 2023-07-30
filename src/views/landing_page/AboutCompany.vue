<template>
  <!-- Hero page -->
  <section class="relative mt-40">
    <div
      class="bg-local bg-blend-darken py-28 text-center text-black"
     
      data-sal="fade"
      data-sal-delay="300"
      data-sal-duration="800"
      data-sal-easing="ease-out-bounce"
    >
      <p class="text-6xl font-black  font-bold leading-normal">{{ $t("scrollDown") }}</p>
    </div>
  </section>
  <section class="flex py-20 md:py-36 px-4 items-center md:px-10 lg:px-36">
    
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="w-full md:w-2/5" data-sal="fade"
      data-sal-delay="800"
      data-sal-duration="1600"
      data-sal-easing="ease-out-bounce">
        <p class="text-4xl font-black">{{ $t("menu[2]") }}</p>
        <p class="text-lg pt-4">{{ $t("aboutPage.description") }}</p>
      </div>
      <div class="w-full md:w-1/2 relative" data-sal="fade"
      data-sal-delay="300"
      data-sal-duration="800"
      data-sal-easing="ease-out-back">
        <div
          class="w-full h-80"
          data-sal="slide-left"
        data-sal-delay="2000"
      data-sal-duration="1200"
      data-sal-easing="ease-out-bounce"
        ></div>
        <div class="company-image"
        data-sal="slide-right"
        data-sal-delay="2000"
      data-sal-duration="1200"
      data-sal-easing="ease-out-bounce">
      <img
          src="./../../assets/itguy.jpg"
          class="object-cover w-full rounded-md"
        />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sal from 'sal.js'
export default {
  name: "Product",
  mounted() {
    sal()
  }
};
</script>

<style lang="postcss">
.company-image {
  @apply absolute
            flex
            items-center
            justify-center
            bg-gradient-to-b
            from-green-300
            to-green-600
            shadow-lg
            rounded-lg
            w-full
            h-80
            top-0
            md:top-6
            right-0
            md:right-6;
}
</style>
