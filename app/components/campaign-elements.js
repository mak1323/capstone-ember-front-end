import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createLog(campaign_log) {
      console.log('I am here', campaign_log)
          this.sendAction('createLog', campaign_log)
    }
  }
});
