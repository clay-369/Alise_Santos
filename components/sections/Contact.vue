<template>
  <section class="flex flex-col lg:flex-row gap-10 items-center" id="contact">
    <div class="w-full lg:w-1/2 text-center">
      <h2>Contact</h2>
      <h3>Laten we samen in gesprek gaan</h3>
    </div>
    <div class="flex flex-col lg:flex-row gap-4 w-full">
      <div
        class="card card-border bg-base-200 hover:shadow-lg w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101 hover:cursor-pointer"
        v-for="contact in contact.contact"
      >
        <div class="card-body items-center">
          <Icon :name="contact.icon" />
          <h3 class="card-title">{{ contact.title }}</h3>
          <p>{{ contact.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: contact } = await useAsyncData("contact", () => {
  return queryCollection("contact").first();
});
</script>
