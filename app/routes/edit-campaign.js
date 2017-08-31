import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    editCampaign(campaign) {
      campaign.save()
        .then(() => this.get('flashMessages').success('Campaign is renamed!'))
      this.transitionTo('campaigns')
  },
  }
});
