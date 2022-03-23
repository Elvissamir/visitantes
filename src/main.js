import { createApp } from 'vue'
import App from "./App.vue";
import "./index.css";
import "./assets/general.css";

// Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faArrowRightFromBracket,
  faHouse,
  faCaretDown,
  faClock,
  faBell,
  faPenToSquare,
  faTrash,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

// Vue app
const solidIcons = [
    faHouse,
    faArrowRightFromBracket,
    faCaretDown,
    faClock,
    faBell,
    faTrash,
    faPenToSquare,
    faCircleCheck,
];

solidIcons.forEach((icon) => library.add(icon));

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');
