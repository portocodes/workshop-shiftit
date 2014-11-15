import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var route = this;
    var promise = new RSVP.Promise(function(resolve, reject) {
      // succeed
      Ember.run.later(route, function () {
        resolve();
      }, 10 * 1000);
      // or reject
      // reject(error);
    });

    return promise;
  }
});
