<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>

    <nav class="m-auto w-2/3 flex space-x-5 bg-white shadow-md p-4 justify-between items-center">
        <ul class="flex space-x-4">
            <li>
                <RouterLink to="/" class="text-gray-600 hover:text-blue-500 hover:underline">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/form" class="text-gray-600 hover:text-blue-500 hover:underline">Preferences
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
