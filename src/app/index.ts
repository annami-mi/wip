import {createApp, markRaw} from "vue";
import App from "./App.vue";
import {createPinia} from "pinia";
import {router} from "./router";
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

export const application = createApp(App)
    .use(pinia)
    .use(router)

