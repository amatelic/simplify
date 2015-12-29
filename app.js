'use strict';
import { deprecated, info, danger, onTime} from './modules/helpers';
import {onEvent, Component} from './modules/component';
import {async} from './modules/async';
import {Model} from './modules/model/model';
import 'fetch';

@Component({
  el: '.main',
})
class View {
  constructor() {
  }

  // @onTime(1000)
  @onEvent('click', 'input')
  onTest(e) {
    console.log(e.target.value);
  }

  template() {
    return '<h1>Prvi haha</h1><input type="text" class="test">';
  }
}

// var name = new View();

var record = new Model({name: 'anze', username: 'matelic'});
record.create({name: 'anze', username: 'matelic'});
