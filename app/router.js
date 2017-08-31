import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('index', { path: '/'})
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('campaigns');
  this.route('campaign', { path: '/campaigns/:campaign_id'});
  this.route('edit-campaign', { path: '/campaigns/:campaign_id/edit-name'});
  // this.route('logs');
  this.route('logs', { path: '/campaigns/logs/:campaign_id'});
  this.route('log', { path: '/campaigns/logs/:campaign_log_id'});
});

export default Router;
