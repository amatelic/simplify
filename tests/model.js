// var test = require('tape');
import { Model } from '../modules/model/model';


test('create user', function(t) {
  var record = new Model({name: 'anze', username: 'matelic'});
  record.create({name: 'anze', username: 'matelic'});

});
