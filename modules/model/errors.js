import _ from 'lodash';

function Errors(prop) {
  if (!this.validation) return Promise.reject({message: "The validation method dosen't exsists."});
  // console.log(valideForErrors(prop, this.validation()));
  return Promise.resolve(valideForErrors(prop, this.validation()));
}

/**
 * Checking if there is any invalid data from the validation method
 */
function valideForErrors(prop = {}, validation = {}) {
  let errors = {};
  Object.keys(prop).forEach((keys) => {
    if (!_.isUndefined(validation[keys])) { //cheking if validation has key
      var error = (validation[keys](prop[keys]));
      if (error) errors[keys] = error;
    }
  });
  if (!_.isEmpty(errors)) {
    return {errors: errors};
  }

  return Promise.resolve({});

}

export function Error(target, key, descriptor) {
  var oldMethod = descriptor.value;
  descriptor.value = function(data) {
    Errors.call(target, data)
      .then((errors) => {
        oldMethod.call(target, data, errors);
      })
      .catch((e) => {
        if (e.message) console.error(e.message);

      });
  };

  return descriptor;
}
