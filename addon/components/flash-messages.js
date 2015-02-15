import Ember from 'ember';

export default Ember.Component.extend({
  layoutName: 'components/ember-flash-message-2000/flash-messages',
  messages: Ember.computed.alias('flashMessage.messages')
});