import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    editTodo: function() {
      this.set('isEditing', true);
    }
  }
});
