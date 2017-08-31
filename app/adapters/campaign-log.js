import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord(store, type, record) {
  // in this instance, the adapter is actually 'this'
  const api = this.get('host')
  const serialized = this.serialize(record, {includeId: true})
  const campaignId = record.record.campaign_id
  const url = `${api}/campaigns/${campaignId}/campaign_logs`
  const data = {campaign_log: serialized}
  return this.ajax(url, 'POST', {data})
},
});
