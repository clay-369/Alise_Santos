<template>
  <section class="flex flex-col lg:flex-none gap-10 items-center">
    <div class="w-full lg:w-1/2 text-center">
      <h2>Testimonials</h2>
      <h3>Wat zeggen mijn klanten over mij</h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div
        class="card card-border bg-base-200 w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101 hover:shadow-lg hover:cursor-pointer"
        v-for="testimonial in testimonials.testimonials"
      >
        <div class="card-body text-center items-center">
          <img
            :src="testimonial.image"
            alt="Testimonial image"
            class="w-32 h-32 rounded-full object-cover mb-10"
          />
          <h3>{{ testimonial.name }}</h3>
          <p>{{ testimonial.testimonial }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: testimonials } = await useAsyncData("testimonials", () => {
  return queryCollection("testimonials").first();
});
</script>
