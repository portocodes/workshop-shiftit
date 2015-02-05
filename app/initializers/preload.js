export function initialize(container, application) {
  application.deferReadiness();
  var store = container.lookup('store:main');

  store.find('category').then(function(categories) {
    if (categories.get('length') > 0) {
      application.advanceReadiness();
      return;
    }

    var todo = store.createRecord('todo', {
      description: "Finish the workshop"
    });
    todo.save().then(function(todo) {
      var category = store.createRecord('category', {
        id: 1,
        name: "Urgent"
      });
      category.save().then(function(result) {
        result.get('todos').pushObject(todo);
        result.save();
      });
      store.createRecord('category', {
        id: 2,
        name: "Really urgent"
      }).save();
      store.createRecord('category', {
        id: 3,
        name: "Super duper caligragurdntenet"
      }).save();

      application.advanceReadiness();
    });
  });
}

export default {
  name: 'preload',
  after: 'store',
  initialize: initialize
};
