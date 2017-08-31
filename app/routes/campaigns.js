import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('campaign');
  },
  actions: {
    createCampaign(campaign){
      let newCampaign = this.get('store').createRecord('campaign', campaign)
      newCampaign.save()
            .then(() => this.get('flashMessages').success('New Campaign ready to go!'))

    },
    deleteCampaign(campaign) {
      campaign.destroyRecord()
      this.get('flashMessages').success('Campaign and all contents deleted.')
    },
  }
});
