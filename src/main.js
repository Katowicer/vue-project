import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import App from './App.vue'
import './app.css'

createApp(App)
    .use(createPinia().use(piniaPluginPersistedstate))
    .use(router)
    .mount('#app');


