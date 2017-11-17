import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  isActive: false,
  isActiveClass: computed('isActive', function() {
    return this.get('isActive') ? 'is-active' : '';
  }),

  actions: {
    showMenu() {
      this.toggleProperty('isActive');
    }
  }
});
