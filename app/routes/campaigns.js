import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('campaign');
  },
  actions: {
    createCampaign(campaign){
      console.log(campaign)
  let newCampaign = this.get('store').createRecord('campaign', campaign)
  newCampaign.save()
},
  }
});
