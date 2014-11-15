import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('loading');
  this.route('about');
  this.resource('categories', function() {
    this.resource('category', { path: '/:category_id' }, function() {});
  });
});

export default Router;
