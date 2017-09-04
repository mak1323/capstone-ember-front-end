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
    console.log('campaign is', campaign)
    // let campaign = this.get('newCampaign')
    // this.set('campaign.name', document.getElementById('newCampaignInput').value)
    // console.log('campaign is',campaign)
    if(!campaign.name){
      this.get('flashMessages')
      .danger('Making a mistake with that blank campaign. Fool')
      return
    } else {
    this.sendAction('createCampaign', campaign)
    // this.set('newCampaign.name', null)
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
      'A Magical Journey of the'
    ]

    const numOne = Math.floor(Math.random() * 154) + 'adjective'
    const numTwo = Math.floor(Math.random() * 154) + 'noun'
    const numThree = Math.floor(Math.random() * 14)
    console.log('numOne', numOne)
    console.log('numTwo', numTwo)
    console.log(document.getElementById(numOne).value)
    console.log(document.getElementById(numTwo).value)
    const adjective = document.getElementById(numOne).value
    const noun = document.getElementById(numTwo).value
    console.log(this.get('noun.1'))
    console.log(this.get('noun.1'))
    document.getElementById('newCampaignInput').value = fun[numThree] + ' ' + adjective + ' ' + noun
    // newCampaign.name = fun[numThree] + ' ' + adjective + ' ' + noun
  }
},
});
