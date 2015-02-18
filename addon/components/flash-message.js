import Ember from 'ember';

export default Ember.Component.extend({
  layoutName: 'components/ember-flash-message-2000/flash-message',

  init: function() {
    this._super();
    if(this.get('message.dismiss')) {
      Ember.run.later(this, this._dismiss, {}, this.get('message.dismiss'));
    }
  },

  _dismiss: function() {
    if(typeof this.customDismiss !== 'undefined') {
      this.customDismiss();
    }else{
      this.get('flashMessage.messages').removeObject(this.get('message'));
    }
  },

  actions: {
    remove: function() {
      this._dismiss();
    }
  }
});