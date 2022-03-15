import { createApp } from 'vue'
import App from './App.vue'
import Tail from "./components/Tail.vue";
import './index.css'
import Banner from "./components/Banner.vue";
import LoginBox from "./components/LoginBox.vue";
import LoginTitle from "./components/LoginTitle.vue";
import LoginBtn from "./components/LoginBtn.vue";
import Auth from "./components/Auth.vue";

const app = createApp(App);
app.component('Tail',Tail);
app.component('Banner',Banner);
app.component('Auth',Auth);
app.component('LoginTitle',LoginTitle);
app.component('LoginBtn',LoginBtn);
app.component('LoginBox',LoginBox);
app.mount('#app');
