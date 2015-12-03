'use strict'
import { deprecated, info, danger, onTime} from './modules/helpers';
import {onEvent, eventListener} from './modules/event';

@eventListener('#name')
class View {
  constructor() {
    console.log();
  }
  @onTime(1000)
  @onEvent('keydown')
  onTest(e) {
    console.log(e.target.value);
  }
}

var name = new View('#name');
