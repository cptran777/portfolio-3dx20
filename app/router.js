import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;

  didTransition() {
    super.didTransition(...arguments);
    window.scrollTo(0,0);
  }
}

Router.map(function() {
  this.route('portfolio', function() {
    this.route('avalon');
    this.route('reeltime');
  });
  this.route('interests');
});
