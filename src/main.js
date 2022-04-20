import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNextSelect from 'vue-next-select'
import vueCountriesCities from "vue-countries-cities";
import vue3StarRatings from "vue3-star-ratings";

import './assets/css/main.css'
import './assets/scss/main.scss'

const app = createApp(App)

app.component('vue-select', VueNextSelect)
app.component("countriesCities", vueCountriesCities);
app.component("vue3-star-ratings", vue3StarRatings);

app.use(store).use(router).mount('#app')
