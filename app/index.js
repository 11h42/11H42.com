import * as stylesheet from '../assets/styles/app.scss';

import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

import {bootstrap}    from './boot'
import {AppComponent} from './app.component'

bootstrap(AppComponent);