import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editCampaign(campaign) {
      campaign.save()
      this.transitionTo('campaigns')
  },
  }
});
