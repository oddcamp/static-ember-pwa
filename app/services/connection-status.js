//code from https://github.com/srowhani/ember-connection-status
import Ember from 'ember';

export default Ember.Service.extend({
  online: true,

  setup (owner) {
    window.addEventListener('online', event => {
      this.set('online', status === 'online');
      owner.send('online', event);
    });

    window.addEventListener('offline', event => {
      this.set('online', status === 'online');
      owner.send('offline', event);
    });
  }
});
