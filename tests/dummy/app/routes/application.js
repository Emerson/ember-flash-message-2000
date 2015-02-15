import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.Object.create({
      showWhen: 'now',
      type: 'alert alert-success',
      message: 'Welcome to the future!',
      selectOptions: Ember.A([
        Ember.Object.create({value: 'now', label: 'Now'}),
        Ember.Object.create({value: 'afterTransition', label: 'After Transition'})
      ])
    });
  },

  actions: {

    submit: function() {
      var model = this.get('currentModel');
      var message = {
        type: model.get('type'),
        text: model.get('message')
      };
      var dismiss = model.get('dismiss');
      if(dismiss && /[0-9]/.test(dismiss)) {
        message.dismiss = parseInt(dismiss);
      }
      if(model.get('showWhen') === 'now') {
        this.get('flashMessage').addMessage(message).now();
      }else{
        this.get('flashMessage').addMessage(message);
      }
    }

  }
});