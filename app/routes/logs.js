import Ember from 'ember';

export default Ember.Route.extend({
  model () {
  return this.get('store').findAll('campaign_log', params.campaign_id);
},
  actions: {
    createLog(campaign_log){
      console.log('log is', campaign_log)
      let newLog = this.get('store').createRecord('campaign_log', campaign_log);
      newLog.save();
    },
  }
});
