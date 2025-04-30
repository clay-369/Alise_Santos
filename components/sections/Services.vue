<template>
  <section class="flex flex-col lg:flex-row gap-10 items-center">
    <div>
      <img src="~/assets/images/serviceimage.jpg" alt="Alicia Soares" />
    </div>
    <div class="w-full lg:w-1/2">
      <h2>Diensten</h2>
      <h3>Over mijn diensten</h3>
      <p>
        Ik bied gezinsbegeleiding, individuele begeleiding (ook kinderen en
        jongeren), coaching, en ondersteuning bij specifieke problemen.
      </p>
      <ul>
        <li v-for="service in services.services" :key="service.description">
          - {{ service.description }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const { data: services } = await useAsyncData("services", () => {
  return queryCollection("services").first();
});
</script>
