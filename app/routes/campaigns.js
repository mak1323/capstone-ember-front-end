import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    const writerApi =  'https://pure-tundra-23985.herokuapp.com/';
    return new Ember.RSVP.hash({
      campaign: this.get('store').findAll('campaign'),
      adjectives: Ember.$.ajax({ url: writerApi + 'adjectives', dataType: 'json', type: 'GET' }),
      nouns: Ember.$.ajax({ url: writerApi + 'nouns', dataType: 'json', type: 'GET' })
    })
  },
  actions: {
    createCampaign (campaign) {
      let newCampaign = this.get('store').createRecord('campaign', campaign);
      newCampaign.save()
        .then(() => this.get('flashMessages').success('New Campaign ready to go!'))
        .catch(()=>this.get('flashMessages').danger('Something went wrong.'));
    },
    deleteCampaign(campaign) {
      campaign.destroyRecord()
        .then(()=>this.get('flashMessages').success('Campaign and all contents deleted.'))
        .catch(()=>this.get('flashMessages').danger('Something went wrong.'))
    },
  }
});
