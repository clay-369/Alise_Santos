<template>
  <section class="flex flex-col lg:flex-none gap-10 items-center">
    <div class="w-full lg:w-1/2">
      <h2>Aanpak</h2>
      <h3>Persoonlijke begeleiding op maat</h3>
      <p>
        Mijn naam is Alicia Soares, ik bied hulp vanuit mijn hart. Ik kijk samen
        met jou wat je nodig hebt om je doel te bereiken. Met meer dat 20 jaar
        ervaring in de jeugd/hulpverlening weet ik hoe ik mensen in hun kracht
        kan zetten zodat ze zelfstandig verder kunnen.
      </p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div
        class="card card-border bg-base-200 w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101 hover:cursor-pointer"
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
