
//defaultsetting for events
let obj = 'events';
let rootEl = '$el';

//setting event listneer on class
export function Component(config = {}) {
  let name = config.el || 'body';
  return function(target) {
    Object.assign(target.prototype, config);
    let allEvents = Object.keys(target.prototype[obj]);         // allEvents.forEach((data, index) => {}
    target.prototype[rootEl] = document.querySelector(name);
    target.prototype[rootEl].innerHTML = target.prototype.template();
    target.constructor = (() => {     //firing before constructor function
      allEvents.forEach((data, index) => {
        var elListener = target.prototype[obj][data].target;
        if (elListener) {
          target.prototype[rootEl].querySelector(elListener).addEventListener(target.prototype[obj][data].event, target.prototype[data]);
          return;
        }

        target.prototype[rootEl].addEventListener(target.prototype[obj][data].event, target.prototype[data]);
      });
    })();
  };
}

//creating obj on target element
function events(target) {
  target[obj] = {};
}

/**
 * @param eventName the name of the event on which it shoulf fire
 * @param element  target element on which it should fire default main object
 */
export function onEvent(eventName, element) {
  return function(target, key, description) {
    if (!target[obj]) events(target);
    target[obj][key] = {event: eventName, target: element};
  };
}
