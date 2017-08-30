import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateLog() {
      this.sendAction('updateLog', this.get('log'))
    },
    deleteLog() {
      console.log(this.get('log'))
    }
  },
});
