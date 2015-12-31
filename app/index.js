import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;


import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-polyfill';

import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {App} from './app.component'
bootstrap(App, []);