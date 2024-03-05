import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import posthogPlugin from './plugin/posthog';
import './style.css';
import 'nprogress/nprogress.css';
import "skeleton-screen-css";
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';

const pinia = createPinia();
const app = createApp(App);
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.use(posthogPlugin);
app.mount('#app');