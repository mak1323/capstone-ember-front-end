import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateLog() {
      console.log('log is', this.get('log'))
      this.sendAction('updateLog', this.get('log'))
    }
  },
});
