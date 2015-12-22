
//defaultsetting for events
let obj = 'events';
let rootEl = '$el';

//setting event listneer on class
export function Component(config = {}) {
  let name = config.el || 'body';
  return function(target) {
    Object.assign(target.prototype, config)
    let allEvents = Object.keys(target.prototype[obj]);         // allEvents.forEach((data, index) => {}
    target.prototype[rootEl] = document.querySelector(name);
    target.constructor = (() => {     //firing before constructor function
      allEvents.forEach((data, index) => {
        target.prototype[rootEl].addEventListener(target.prototype[obj][data].event, target.prototype[data]);
        target.prototype[rootEl].innerHTML = target.prototype.template();
      });
    })();
  };
}

//creating obj on target element
function events(target) {
  target[obj] = {};
}

/**
 * Adding method to target object
 */
export function onEvent(eventName) {
  return function(target, key, description) {
    if (!target[obj]) events(target);
    target[obj][key] = {event: eventName};
  };
}
