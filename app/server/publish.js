/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

Meteor.publish('todos', function () {
  return Todos.find({userId: this.userId});
});

