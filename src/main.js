import {createApp} from 'vue'
import App from './App.vue'
import Tail from "./components/Tail.vue";
import Banner from "./components/Banner.vue";
import Auth from "./components/Auth.vue";
import './index.css'
import './assets/general.css'

const app = createApp(App);
app.component('Tail', Tail);
app.component('Banner', Banner);
app.component('Auth', Auth);
app.mount('#app');
