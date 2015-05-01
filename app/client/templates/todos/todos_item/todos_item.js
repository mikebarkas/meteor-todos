/*****************************************************************************/
/* TodosItem: Event Handlers */
/*****************************************************************************/
Template.TodosItem.events({
  'click [name=isDone]': function (e, tmpl) {
    var id = this._id;
    var isDone = tmpl.find('input').checked;
    Todos.update({_id: id}, {
      $set: {
        isDone: isDone
      }
    });
  }
});

/*****************************************************************************/
/* TodosItem: Helpers */
/*****************************************************************************/
Template.TodosItem.helpers({
  isDoneChecked: function () {
    return this.isDone ? 'checked' : '';
  }
});

/*****************************************************************************/
/* TodosItem: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosItem.created = function () {
};

Template.TodosItem.rendered = function () {
};

Template.TodosItem.destroyed = function () {
};
