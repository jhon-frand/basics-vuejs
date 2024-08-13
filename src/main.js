import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css';


createApp(App)
.use(router)
//vuetify
.use(vuetify)
.mount('#app')
