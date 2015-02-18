# Ember Flash Message 2000

### Installation

This is an [ember-cli](http://www.ember-cli.com/) addon and can be installed using [npm](https://www.npmjs.org/package/ember-flash-message-2000):

```bash
npm install --save-dev ember-flash-message-2000
```

### Demo

You can see the basic dummy app here:

  * [Dummy App](http://ember-flash-message-2000.emersonlackey.com)
  * [Tests](http://ember-flash-message-2000.emersonlackey.com/tests/)

### Basic API

```handlebars
  {{flash-messages}}
```

```javascript

// From within a route, controller, or component...

// The basic flash message. Displays itself after the next route transition occurs
this.get('flashMessage').addMessage({text: 'hello', type: 'alert alert-success'});

// The same as above, but it will automatically dismiss itself after 5 seconds
this.get('flashMessage').addMessage({dismiss: 5000, text: 'hello', type: 'alert alert-success'});

// Shows immediately
this.get('flashMessage').addMessage({text: 'hello', type: 'alert alert-success'}).now();

// Shows immediately and removes itself after 3 seconds
this.get('flashMessage').addMessage({text: 'goodbye', type: 'alert alert-success', dismiss: 3000}).now();

```

### Custom Dismiss Effects

If you'd like to add your own dismiss effects, all you need to do is override the default initializer. To do this, just copy the [default one from this repository](https://github.com/Emerson/ember-flash-message-2000/blob/master/app/initializers/ember-flash-message-2000.js) to your own project, ensuring the filename is the same. The initializer allows you to pass a config object that has a `customDismiss` method, which will be used in place of default one. You can see an example of this below:

```javascript
// your-app/initializers/flash-message-2000.js
import Ember from 'ember';
import {initialize} from 'ember-flash-message-2000/initializers/flash-message-2000';

if(Ember.libraries) {
  Ember.libraries.register('Ember Flash Message 2000', '0.0.7');
}

export default {
  name: 'ember-flash-message-2000',
  initialize: function(container, application) {
    var config = {
      customDismiss: function() {
        var _this = this;
        this.$().fadeOut(1000, function() {
          _this.get('flashMessage.messages').removeObject(_this.get('message'));
        })
      }
    };
    initialize(container, application, config);
  }
};

```

### Template Customizations

If you'd like to customize the markup of the flash messages you can leverage the power of Ember-CLI and simply override the default templates provided by Ember-Flash-Message-2000. These are all defined [here](https://github.com/Emerson/ember-flash-message-2000/tree/master/app/templates/components/ember-flash-message-2000). In simple terms, create a folder in your host application `templates/components/ember-flash-message-2000/`, copy over the existing templates from this project, and modify to your liking. At the moment the markup is taken directly from bootstrap.

### Demo App

You can see a more holistic example by looking at the [Dummy app](https://github.com/Emerson/ember-flash-message-2000/tree/master/tests/dummy/app) that we use to test against. The [index.hbs](https://github.com/Emerson/ember-flash-message-2000/blob/master/tests/dummy/app/templates/index.hbs) template and the [application route](https://github.com/Emerson/ember-flash-message-2000/blob/master/tests/dummy/app/routes/application.js) are of particular interest.