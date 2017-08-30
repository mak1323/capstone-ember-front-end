import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteLog() {
      console.log('working')
      return this.sendAction('deleteLog', this.get('log'))
    },
  }
});
