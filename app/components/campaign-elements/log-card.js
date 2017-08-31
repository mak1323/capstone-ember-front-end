import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteLog() {
      return this.sendAction('deleteLog', this.get('log'))
    },
    updateLog() {
      this.sendAction('updateLog', this.get('log'))
      const log = this.get('log')
      const modalShutDown = log.id + 'editModal'
      $('.modal').modal('hide')
    },
  }
});
