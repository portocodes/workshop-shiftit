import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTodo: function (todoDetails) {
      var todoRecord = this.store.createRecord('todo', todoDetails);
      var controller = this;

      todoRecord.save().then(function (todoModel) {
        controller.get('model.todos').then(function (todos) {
          todos.pushObject(todoModel);
          controller.get('model').save();
        });
      });
    }
  }
});
