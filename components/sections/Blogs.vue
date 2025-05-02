<template>
  <section class="flex flex-col gap-10 items-center" id="blogs">
    <div class="w-full text-center">
      <h2>Blogs</h2>
      <h3>Lees meer over opvoedkundige begeleiding</h3>
    </div>
    <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
      <article
        class="flex p-10 flex-col items-start transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101 hover:shadow-lg hover:cursor-pointer bg-base-200"
        v-for="blog in blogs.blogs"
      >
        <time datetime="2020-03-16" class="text-gray-500 mb-2">{{
          blog.date
        }}</time>
        <h3>
          {{ blog.title }}
        </h3>
        <p>
          {{ blog.description }}
        </p>
        <div>
          <p class="font-semibold text-gray-900">
            {{ blog.author }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const { data: blogs } = await useAsyncData("blogs", () => {
  return queryCollection("blogs").first();
});
</script>
