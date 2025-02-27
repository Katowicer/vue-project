<script setup>
import AnimatedContainer from '@/components/ui/AnimatedContainer.vue';
import SideHeading from '@/components/ui/SideHeading.vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
</script>

<template>
    <AnimatedContainer>
        <SideHeading class="m-5" title="User form" />

        <form @submit.prevent class="space-y-5">
            <input id="name" v-model="userStore.username" type="text" placeholder="Username" class="w-full" />
            <input id="email" v-model="userStore.email" type="email" placeholder="Email" class="w-full" />
        </form>
    </AnimatedContainer>

</template>
