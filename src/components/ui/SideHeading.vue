<script setup>
    const props = defineProps({ title: String })
</script>

<template>
    <h1 class="mb-4 text-2xl font-black transition-all duration-300 hover:translate-1">{{ title }}</h1>
</template>



