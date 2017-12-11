import Controller from '@ember/controller';

export default Controller.extend({
  emailAddress: '',
  message: '',

  emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageValid: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('emailValid', 'messageValid'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage() {
      alert(`Sending your message: ${this.get('emailAddress')} - ${this.get('message')}`);
      this.set('responseMessage', `Thank you! We got your message and we'll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
