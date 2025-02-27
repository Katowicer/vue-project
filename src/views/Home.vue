<script setup>
import { useUserStore } from '@/stores/user';
import AnimatedContainer from '@/components/ui/AnimatedContainer.vue';
import Container from '@/components/ui/Container.vue';
import MainHeading from '@/components/ui/MainHeading.vue';
import SideHeading from '@/components/ui/SideHeading.vue';

const userStore = useUserStore();
</script>

<template>
    <Container>
        <div>
            <MainHeading title="Testing components, routing and state managment" />
        </div>
        <main>
            <AnimatedContainer>
                <SideHeading class="m-5" title="User from Pinia store" />
                <div class="m-5">
                    <p class="text-gray-600">Username in userStore: {{ userStore.username }}</p>
                    <p class="text-gray-600">Email in userStore: {{ userStore.email }}</p>
                    <span class="text-green-800">Or just use Vue Dev Tools...</span>
                </div>
            </AnimatedContainer>
        </main>
    </Container>
</template>