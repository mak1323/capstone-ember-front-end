import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  log: DS.attr('text'),
  campaign: DS.belongsTo('campaign')
});
