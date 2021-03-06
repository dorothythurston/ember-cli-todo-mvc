import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editTodo: function() {
      this.set('isEditing', true);
    },

    acceptChanges: function() {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('todo.title'))) {
        this.send('removeTodo');
      } else {
        this.get('todo').save();
      }
    },

    removeTodo: function() {
      var todo = this.get('todo');
      todo.deleteRecord();
      todo.save();
    }
  }
});
