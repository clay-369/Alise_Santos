<template>
  <footer
    class="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4"
  >
    <p class="text-center">
      Copyright © Clayton Sumter - Alle rechten voorbehouden
    </p>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a v-for="icon in icons.icons" :key="icon.name" :href="icon.url">
        <Icon :name="icon.icon" class="text-logo-blue" />
      </a>
    </nav>
  </footer>
</template>

<script setup>
const { data: icons } = await useAsyncData("icons", () => {
  return queryCollection("icons").first();
});
</script>
