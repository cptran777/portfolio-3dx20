import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('portfolio', function() {
    this.route('avalon');
    this.route('reeltime');
  });
  this.route('interests');
});
