<template>
  <div class="slidev-layout default relative overflow-auto">
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
      <slot />
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

<style>
 .bg-left-arrow {
   background-color: rgb(30, 173, 228);
 }

.bg-left-bar {
  background-color: rgb(50, 91, 116);
}

.slidev-layout {
  background-color: white;
  color: black;
  font-family: 'Arial', sans-serif;
}

.slidev-layout h1 {
  color: black;
  font-weight: bold;
  margin-bottom: 1rem;
}

.slidev-layout h2 {
  color: #3b82f6;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.slidev-layout h3 {
  color: #60a5fa;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

/* Make sure content is visible within overflow scrolling */
.overflow-auto {
  max-height: 95vh;
  scrollbar-width: thin;
  scrollbar-color: rgba(37, 99, 235, 0.3) transparent;
}

.overflow-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-auto::-webkit-scrollbar-thumb {
  background: rgba(37, 99, 235, 0.3);
  border-radius: 3px;
}

/* Ensure mermaid diagrams have good visibility */
.slidev-layout .mermaid {
  background-color: white;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
}
</style>

