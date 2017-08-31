import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createLog(campaign_log) {
          this.sendAction('createLog', campaign_log)
    },
    updateLog(log) {
      this.sendAction('updateLog', log)
    },
  },
});
