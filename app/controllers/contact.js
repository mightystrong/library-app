import Controller from '@ember/controller';

export default Controller.extend({
  emailAddress: '',
  message: '',

  emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageValid: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('emailValid', 'messageValid'),
  isDisabled: Ember.computed.not('isValid')
});
