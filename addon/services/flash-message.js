import Ember from 'ember';

export default Ember.Controller.extend({
  isObserving: false,

  init: function() {
    this.set('queuedMessages', Ember.A([]));
    this.set('messages', Ember.A([]));
    this._super();
  },

  addMessage: function(message) {
    this._observeRoute();
    this.get('queuedMessages').pushObject(Ember.Object.create(message));
    return this;
  },

  now: function() {
    this.get('messages').pushObject(this.get('queuedMessages').shiftObject());
  },

  clearMessages: function() {
    this.get('messages').clear();
  },

  _displayQueuedMessages: function() {
    var _this = this;
    if(this.get('queuedMessages.length') > 0) {
      Ember.run.later(function() {
        _this.get('messages').pushObjects(_this.get('queuedMessages'));
        _this.get('queuedMessages').clear();
      });
    }
  },

  _observeRoute: function() {
    var _this = this;
    if(!this.get('isObserving')) {
      var applicationController = this.container.lookup('controller:application');
      applicationController.addObserver('currentRouteName', function() {
        _this._displayQueuedMessages();
        _this.clearMessages();
      }); 
      this.set('isObserving', true);
    }
  }
});