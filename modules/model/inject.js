//Important you can not oweride constructor by just calling
//Model.prototype.constructor becouse of the new keyword
//we are creating a new instance so over constructor is overided

export function Inject() {
  var arg = arguments;
  return function(Model) {
    let oldProto = Model.prototype;
    Model = function(argument) {
      let cost = oldProto.constructor.apply(this, [argument, arg]);
    };

    Model.prototype = oldProto;
    return Model;
  };
}
