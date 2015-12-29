//What do i have to do
//TODO validation
//TODO storage(database and local-storage)
//TODO CRUD system
import { Inject } from './inject';
import { Error } from './errors';
import EventEmitter from 'Olical/EventEmitter';

export class Model extends EventEmitter{
  attributes;
  constructor(attributes) {
    super();
    this.addListener('validation::errors', function(error) {
      Object.keys(error).forEach(function(data) {
        console.log(error[data]);
      });
    });
  }

  get(key) {
    return this.attributes[key];
  }

  set(key, value) {
    if (arguments.length < 2) throw Error('there are not enought parameters');

    this.attributes[key] = value;
    return this.attributes[key];
  }

  @Error
  create(prop, err) {
    if (err) {
      console.log(err);
      this.emitEvent('validation::errors', [err.errors]);
    }
  }

  validation() {
    return {
      name: (name) => { if (name.length > 3) return 'Name is to short!';},

      username: (username) => { if (username.length > 3) return 'Username is to short!';},
    };
  }

}
