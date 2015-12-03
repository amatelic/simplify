// https://blog.pivotal.io/labs/labs/javascript-constructors-prototypes-and-the-new-keyword

export function deprecated(title) {
  return function(target, key, descriptor) {
    return {
      value: function() {
        console.warn(title);
        descriptor.value.apply(this, arguments);
      },
    };
  };
}

export function info(title) {
  return function(target, key, descriptor) {
    return {
      value: function() {
        console.info(title);
        descriptor.value.apply(this, arguments);
      },
    };
  };
}

export function danger(title) {
  return function(target, key, descriptor) {
    return {
      value: function() {
        descriptor.value.apply(this, arguments);
      },
    };
  };
}

export function onTime(interval) {
  var timeout = null;
  return function(target, key, descriptor) {
    return {
      value: function() {
        clearInterval(timeout);
        timeout = setTimeout(() => {
          descriptor.value.apply(target, arguments);
        }, interval);
      },
    };
  };
}
