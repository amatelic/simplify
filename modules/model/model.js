//What do i have to do
//TODO validation
//TODO storage(database and local-storage)
//TODO CRUD system
import { Inject } from './inject';
import { Error } from './errors';

// @Inject(Bla)
export class Model {
  attributes;
  constructor(attributes) {
    // this.errors = {};
    // console.log(this);
  }

  get(key) {
    return this.attributes[key];
  }

  set(key, value) {
    if (arguments.length < 2) throw Error('there are not enought parameters');

    this.attributes[key] = value;
    return this.attributes[key] === value;
  }

  @Error
  create(properties, errors) {
  }

  validation() {
    return {
      name: (name) => { if (name.length > 3) return 'Name is to short!';},
    };
  }

}
