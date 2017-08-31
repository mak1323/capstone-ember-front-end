import Ember from 'ember';

export default Ember.Route.extend({
  model () {
  return this.get('store').findAll('campaign_log');
},
  actions: {
    createLog(campaign_log){
      let newLog = this.get('store').createRecord('campaign_log', campaign_log);
      newLog.save()
        .then(()=>this.get('flashMessages').success('Log is born!'))
        .catch(()=>this.get('flashMessages').danger('Something went wrong.'))
    },
    deleteLog(log) {
      log.destroyRecord()
      .then(()=>this.get('flashMessages').success('Log is murdered.!'))
      .catch(()=>this.get('flashMessages').danger('Something went wrong.'))

    },
    updateLog(log) {
      log.save()
      .then(()=>this.get('flashMessages').success('Log updated.!'))
      .catch(()=>this.get('flashMessages').danger('Something went wrong.'))
  },
  }
});
