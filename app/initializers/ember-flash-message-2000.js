import Ember from 'ember';
import {initialize} from 'ember-flash-message-2000/initializers/flash-message-2000';

if(Ember.libraries) {
  Ember.libraries.register('Ember Flash Message 2000', '0.0.7');
}

export default {
  name: 'ember-flash-message-2000',
  initialize: function(container, application) {
    initialize(container, application);
  }
};
