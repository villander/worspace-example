import EmberRouter from '@ember/routing/router';
import config from '@foo/client/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.mount('@foo/customers', {
    path: 'customers',
    as: 'customers',
  });
});
