import Ember from 'ember';

export default Ember.Controller.extend({
  numberOfMessages: Ember.computed.alias('flashMessage.queuedMessages.length')
});