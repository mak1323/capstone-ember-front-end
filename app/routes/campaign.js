import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
  return this.get('store').findRecord('campaign', params.campaign_id);
},
  actions: {
    createLog(campaign_log){
      let newLog = this.get('store').createRecord('campaign_log', campaign_log);
      newLog.save();
    }
  },
});
