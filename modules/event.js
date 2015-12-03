// if (!target.events[key]) target.events[key] = {};
// target.events[key]['event'] = eventName;

// root event controller
let obj = 'events';
let rootEl = '$el';

export function eventListener(name) {
  name = name || 'body';
  return function(target) {
    let allEvents = Object.keys(target.prototype[obj]);         // allEvents.forEach((data, index) => {}
    target.prototype[rootEl] = document.querySelector(name);
    target.constructor = (() => {     //firing before constructor function
      allEvents.forEach((data, index) => {
        target.prototype.$el.addEventListener(target.prototype[obj][data].event, target.prototype[data]);
      });
    })();
  };
}

function events(target) {
  target[obj] = {};
}

export function onEvent(eventName) {
  return function(target, key, description) {
    if (!target[obj]) events(target);
    target[obj][key] = {event: eventName};
  };
}
