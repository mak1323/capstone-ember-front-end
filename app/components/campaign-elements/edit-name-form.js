import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editCampaign() {
      this.sendAction('editCampaign', this.get('campaign'))
    },
  },
});
