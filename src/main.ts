import { createApp } from "vue";
import App from "./App.vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {store} from "~/store";

import "~/styles/index.scss";
import "uno.css";

import "element-plus/theme-chalk/src/message.scss";
import router from "~/router/router";
import axios from "axios";


const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.config.globalProperties.$axios = axios;
app.use(router)
app.use(store)
app.mount("#app");