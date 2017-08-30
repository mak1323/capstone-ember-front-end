import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  completed: DS.attr('boolean'),
  campaign_logs: DS.hasMany('campaign_log')
});
