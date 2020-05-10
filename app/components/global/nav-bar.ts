import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { Registry as Services } from '@ember/service';
import { action } from '@ember/object';
import DeviceResolution, { ScreenResolution } from 'portfolio-3dx20/services/device-resolution';

interface GlobalNavBarArgs {}

export default class GlobalNavBar extends Component<GlobalNavBarArgs> {
  @service
  router!: Services['router'];

  @service
  deviceResolution!: DeviceResolution;

  @tracked
  isExpanded = true;

  get currentRoute(): string {
    return this.router.currentRouteName;
  }

  get screenResolution(): ScreenResolution {
    return this.deviceResolution.screenResolution;
  }

  get expandedStateClassSuffix(): string {
    return this.isExpanded ? 'is-expanded' : 'is-collapsed';
  }

  @action
  toggleExpanded(newState: boolean): void {
    this.isExpanded = typeof newState === 'boolean' ? newState : !this.isExpanded;
  }
}
