import Ember from 'ember';

export default Ember.Component.extend({
  newLog: {
  title: null,
  log: null
},
actions: {
  createLog() {
    let campaign_log = this.get('newLog')
    campaign_log.campaign_id = parseInt(this.get('campaign.id'))
    console.log('campaign_log', campaign_log)
    console.log('campaign is', this.get('campaign.id'))
    if(!campaign_log.title || !campaign_log.log){
      this.get('flashMessages')
      .danger('Making a mistake with that blank log. Fool')
      return
    } else {
    this.sendAction('createLog', campaign_log)
    this.set('newLog.title', null)
    this.set('newLog.log', null)
  }
  },
},
});
