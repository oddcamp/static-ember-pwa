import Route from '@ember/routing/route';
import { action, computed } from 'ember-decorators/object';
import { reads } from 'ember-decorators/object/computed';
import { service } from 'ember-decorators/service';

export default class ApplicationRoute extends Route {
  @service notify
  @service connectionStatus
  @service fastboot

  @reads('fastboot.isFastBoot') isFastBoot

  constructor () {
    super(...arguments)
    if (!this.get('isFastBoot')) {
      let connection = this.get('connectionStatus')
      connection.setup(this)
    }
  }

  @computed
  get status() {
    return this.get('connectionStatus.online')
      ? 'Online' : 'Offline'
  }

  @action
  online () {
    return this.get('notify').info("You are online");
  }

  @action
  offline () {
    return this.get('notify').info("You are offline");
  }
}
