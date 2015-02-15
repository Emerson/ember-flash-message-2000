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

// The basic flash message. Displays itself after the next route transition occurs
this.get('flashMessage').addMessage({text: 'hello', type: 'alert alert-success'});

// The same as above, but it will automatically dismiss itself after 5 seconds
this.get('flashMessage').addMessage({dismiss: 5000, text: 'hello', type: 'alert alert-success'});

// Shows immediately
this.get('flashMessage').addMessage({text: 'hello', type: 'alert alert-success'}).now();

// Shows immediately and removes itself after 3 seconds
this.get('flashMessage').addMessage({text: 'goodbye', type: 'alert alert-success', dismiss: 3000}).now();

```

### Major Customizations

Sometimes you'll want to _really_ customize things. In this case you can leverage the power of Ember-CLI and simply override the default templates provided by Ember-Flash-Message-2000. These are all defined [here](https://github.com/Emerson/ember-flash-message-2000/tree/master/app/templates/components/ember-flash-message-2000). In simple terms, create a folder in your host application `templates/components/ember-flash-message-2000/`, copy over the existing templates from this project, and modify to your liking. At the moment the markup is taken directly from bootstrap.

### Demo App

You can see a more holistic example by looking at the [Dummy app](https://github.com/Emerson/ember-flash-message-2000/tree/master/tests/dummy/app) that we use to test against. The [index.hbs](https://github.com/Emerson/ember-flash-message-2000/blob/master/tests/dummy/app/templates/index.hbs) template and the [application route](https://github.com/Emerson/ember-flash-message-2000/blob/master/tests/dummy/app/routes/application.js) are of particular interest.