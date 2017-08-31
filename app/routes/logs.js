import Ember from 'ember';

export default Ember.Route.extend({
  model () {
  return this.get('store').findAll('campaign_log');
},
  actions: {
    createLog(campaign_log){
      console.log('log is', campaign_log)
      let newLog = this.get('store').createRecord('campaign_log', campaign_log);
      newLog.save();
      this.get('flashMessages').success('Log is born!')
    },
    deleteLog(log) {
      log.destroyRecord();
      this.get('flashMessages').success('Log is murdered!')
      this.replaceWith('campaign-elemets')

    },
  }
});
