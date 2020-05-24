import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Breadcrumb from 'primevue/breadcrumb';
import AutoComplete from 'primevue/autocomplete';
import Chips from 'primevue/chips';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import TabMenu from 'primevue/tabmenu'
import Listbox from 'primevue/listbox';
import Card from 'primevue/card'

import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './assets/styles/layout.css';

Vue.config.productionTip = false;

Vue.component('TabMenu', TabMenu);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('AutoComplete', AutoComplete);
Vue.component('Chips', Chips);
Vue.component('InputText', InputText);
Vue.component('MultiSelect', MultiSelect)
Vue.component('Calendar', Calendar)
Vue.component('Dropdown', Dropdown)
Vue.component('Button', Button)
Vue.component('Listbox', Listbox)
Vue.component('Card', Card)


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')