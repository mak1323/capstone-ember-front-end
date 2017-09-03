import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    const writerApi =  'https://pure-tundra-23985.herokuapp.com/';
    return Ember.$.ajax({ url: writerApi + 'nouns', dataType: 'json', type: 'GET' })
  }
});
