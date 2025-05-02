<template>
  <section class="flex flex-col lg:flex-none gap-10 items-center" id="faq">
    <div class="w-full lg:w-1/2 text-center">
      <h2>Faq</h2>
      <h3>Veelgestelde vragen</h3>
    </div>
    <div>
      <div class="join join-vertical bg-base-100">
        <div
          class="collapse collapse-arrow join-item border-base-300 border"
          v-for="item in faq.faq"
        >
          <input type="radio" name="my-accordion-4" />
          <div class="collapse-title font-semibold">
            {{ item.question }}
          </div>
          <div class="collapse-content text-sm">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: faq } = await useAsyncData("faq", () => {
  return queryCollection("faq").first();
});
</script>
