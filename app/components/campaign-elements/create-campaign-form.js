import Ember from 'ember';

export default Ember.Component.extend({
  newCampaign: {
  name: null,
  completed: false
},
actions: {
  createCampaign() {
    let campaign = {
      name: null,
      completed: false
    }
    campaign.name = document.getElementById('newCampaignInput').value
    if(!campaign.name){
      this.get('flashMessages')
      .danger('Making a mistake with that blank campaign. Fool')
      return
    } else {
    this.sendAction('createCampaign', campaign)
    this.set('newCampaign.name', null)
  }
  },
  generateRandomCampaign() {
    const fun = [
      'The Quest for the',
      'The Last',
      'Mission for the',
      'A Journey for the',
      'The Lost',
      'The Ridicule of the',
      'The Haunting of the',
      'A Day at the',
      'The Darkness at the',
      'The Quest for the',
      'A Dark Journey for the',
      'The Ladies of the',
      'The Monks of the',
      'The Crapfest that is the',
      'A Magical Journey of the',
      'The Knights of the',
      'One Thousand and One Nights at the',
      'Murder of the',
      'A Dark Meeting at the'
    ]

    const numOne = Math.floor(Math.random() * 154) + 'adjective'
    const numTwo = Math.floor(Math.random() * 154) + 'noun'
    const numThree = Math.floor(Math.random() * 19)
    const adjective = document.getElementById(numOne).value
    const noun = document.getElementById(numTwo).value
    document.getElementById('newCampaignInput').value = fun[numThree] + ' ' + adjective + ' ' + noun
    // newCampaign.name = fun[numThree] + ' ' + adjective + ' ' + noun
  }
},
});
