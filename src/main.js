import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/app.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGear, faChevronDown } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faGear, faInstagram, faLinkedin, faChevronDown)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(router).use(vuetify).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
