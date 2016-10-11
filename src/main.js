// import 'jquery/dist/jquery'
// import './custom'

import 'semantic-ui/dist/semantic';
import 'semantic-ui/dist/components/api'
import 'semantic-ui/dist/components/state'
import 'semantic-ui/dist/components/visibility'

import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    render: h => h(App)
})
