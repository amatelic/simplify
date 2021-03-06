export function async(makeGenerator) {
  return function() {
    var generator = makeGenerator.apply(this, arguments);

    function handle(result) {
      if (result.done) return result.value;

      return result.value.then(function(res) {
        return handle(generator.next(res));
      },

      function(err) {
        return handle(generator.throw(err));
      });
    }

    return handle(generator.next());
  };
}
