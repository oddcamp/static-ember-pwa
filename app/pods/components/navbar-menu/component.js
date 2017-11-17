import Component from '@ember/component';
import { action, computed } from 'ember-decorators/object';

export default class NavbarMenuComponent extends Component {

  @computed('isActive')
  get isActiveClass() {
    return this.get('isActive') ? 'is-active' : '';
  }

  @action
  showMenu() {
    this.toggleProperty('isActive');
  }
}
