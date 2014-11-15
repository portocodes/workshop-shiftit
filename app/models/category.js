import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  todos: DS.hasMany('todo', { async: true }),

  completedTodos: function () {

  }.property()
});
