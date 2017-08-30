import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
  return this.get('store').findRecord('campaign', params.campaign_log_id);
},
actions: {
  updateLog(log) {
    log.save()
    console.log(log)
    console.log(this.get('campaign'))
    // this.transitionTo('campaign')
},
}
});
