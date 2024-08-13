// Importaciones necesarias de Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Configuración de Vuetify
const vuetify = createVuetify({
  components,
  directives,
   icons: {
    defaultSet: 'mdi',
  },
});

export default vuetify;
