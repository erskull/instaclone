import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        options: { customProperties: true },
      themes: {
        dark: {
            accent: '#E2336B',
            primary: '#FCAC46',
            secondary: '#282A34',
            info: '#3C3F51'
        },
    }
    },
    
});