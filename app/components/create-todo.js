import Ember from 'ember';

export default Ember.Component.extend({
  description: "description",
  placeholder: "placeholder",
  todoDescription: "",

  actions: {
    createTodo: function (description) {
      this.sendAction('action', { description: description });
    }
  }
});
