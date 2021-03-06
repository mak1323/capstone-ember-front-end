import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteLog() {
      return this.sendAction('deleteLog', this.get('log'))
    },
    updateLog() {
      this.sendAction('updateLog', this.get('log'))
      Ember.$('.modal').modal('hide');
    },
  }
});
