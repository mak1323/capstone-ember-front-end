import Ember from 'ember';

export default Ember.Component.extend({
  newCampaign: {
  name: null,
  completed: false,
},
actions: {
  createCampaign() {
    let campaign = this.get('newCampaign')
    if(!campaign.name){
      this.get('flashMessages')
      .danger('Making a mistake with that blank campaign. Fool')
      return
    } else {
    this.sendAction('createCampaign', campaign)
    this.set('newCampaign.name', null)
  }
  },
},
});