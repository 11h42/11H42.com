import * as stylesheet from '../assets/styles/app.scss';

import jQuery from '../node_modules/jquery/dist/jquery';
import $ from '../node_modules/jquery/dist/jquery';
import * as semanticUi from '../node_modules/semantic-ui/dist/semantic';

//import '../node_modules/angular2/bundles/angular2-polyfills'
//import '../node_modules/rxjs/bundles/Rx.umd'
//import '../node_modules/angular2/bundles/angular2-all.umd'

import {bootstrap}    from '../node_modules/angular2/platform/browser'
import {AppComponent} from './app.component'

bootstrap(AppComponent);