'use strict';
import { deprecated, info, danger, onTime} from './modules/helpers';
import {onEvent, Component} from './modules/event';
import {async} from './modules/async';
import {Model} from './modules/model/model'
import 'fetch';

@Component({
  el: '.main',
})
class View {
  constructor() {
    console.log();
  }

  @onTime(1000)
  @onEvent('keydown')
  onTest(e) {
    console.log(e.target.value);
  }

  template() {
    return '<h1>Prvi bla<h1>';
  }
}

var name = new View();

var record = new Model({name: 'anze', username: 'matelic'});
record.create({name: 'anze', username: 'matelic'})
// fetch('./user.json').then(response => response.json()).then(function(json) {
//   console.log('parse json', json);
// }).catch(function(ex) {
//   console.log('parsing failed', ex);
// });

// var create = async(function*() {
//   let data = fetch('./user.json');
//   let json = yield data.then(response => response.json());
//
//   console.log(json);
// });
//
// create();
