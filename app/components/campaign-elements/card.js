import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteCampaign() {
      return this.sendAction('deleteCampaign', this.get('campaign'))
    },
  }
});
