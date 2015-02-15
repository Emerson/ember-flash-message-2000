import flashMessage from 'ember-flash-message-2000/services/flash-message';

export function initialize(container, application, overrides) {
  var config = {};
  if(typeof overrides !== 'undefined') {
    for(var attr in overrides) {
      config[attr] = overrides[attr];
    }
  }

  application.register('service:flashMessage', flashMessage, {singleton: true});
  application.inject('route', 'flashMessage', 'service:flashMessage');
  application.inject('controller', 'flashMessage', 'service:flashMessage');
  application.inject('component', 'flashMessage', 'service:flashMessage');
}