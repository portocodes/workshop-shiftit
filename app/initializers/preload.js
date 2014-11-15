export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  // var store = container.lookup('store:main');

  // var todo = store.createRecord('todo', {
  //   id: 1,
  //   description: "Finish the workshop"
  // });
  // var category = store.createRecord('category', {
  //   id: 1,
  //   name: "Urgent"
  // });
  // category.get('todos').pushObject(todo);
  // category.save();
  // store.createRecord('category', {
  //   id: 2,
  //   name: "Really urgent"
  // }).save();
  // store.createRecord('category', {
  //   id: 3,
  //   name: "Super duper caligragurdntenet"
  // }).save();
}

export default {
  name: 'preload',
  after: 'store',
  initialize: initialize
};
