import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { Registry as Services } from '@ember/service';

interface GlobalNavBarArgs {}

export default class GlobalNavBar extends Component<GlobalNavBarArgs> {
  @service
  router!: Services['router'];

  get currentRoute(): string {
    return this.router.currentRouteName;
  }
}
