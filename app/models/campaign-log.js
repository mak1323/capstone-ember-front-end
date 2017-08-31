import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  log: DS.attr('string'),
  campaign: DS.belongsTo('campaign', {nested: true})
});
