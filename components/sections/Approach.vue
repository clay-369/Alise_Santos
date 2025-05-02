<template>
  <section class="flex flex-col lg:flex-none gap-10 items-center" id="approach">
    <div class="w-full lg:w-1/2 text-center">
      <h2>Aanpak</h2>
      <h3>Persoonlijke begeleiding op maat</h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div
        class="card card-border bg-base-200 w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101 hover:shadow-lg hover:cursor-pointer"
        v-for="approach in approach.approach"
      >
        <div class="card-body">
          <h3 class="card-title">{{ approach.title }}</h3>
          <p>{{ approach.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: approach } = await useAsyncData("approach", () => {
  return queryCollection("approach").first();
});
</script>
