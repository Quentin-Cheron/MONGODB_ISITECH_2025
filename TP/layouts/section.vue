<!-- layouts/section.vue -->
<template>
  <div class="slidev-layout section relative overflow-auto">
    <!-- Blue sidebar -->
    <div class="fixed left-0 top-0 bottom-0 w-4 bg-left-bar"></div>

    <!-- Logo -->
    <div class="absolute top-2 right-4 w-28 h-8 flex items-center justify-center">
      <img src="./../assets/logo-isitech.webp" alt="Logo" class="w-auto h-auto max-w-full max-h-full" />
    </div>

    <!-- Page number -->
    <div class="fixed bottom-4 left-0 z-10">
      <div class="bg-left-arrow text-black px-8 py-3 text-md flex items-left" style="clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);">
        {{ $slidev.nav.currentPage }}
      </div>
    </div>

    <!-- Content area -->
    <div class="pl-16 pt-4 pr-6 pb-12 h-full flex flex-col justify-center">
      <h1 class="text-4xl font-bold text-white"><slot /></h1>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>



<style>
.bg-left-arrow {
  background-color: rgb(30, 173, 228);
}

.bg-left-bar {
  background-color: rgb(50, 91, 116);
}

</style>
