import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import DeviceResolution, { ScreenResolution } from 'portfolio-3dx20/services/device-resolution';

export default class Index extends Controller {
  @service
  deviceResolution!: DeviceResolution;

  get screenResolution(): ScreenResolution {
    return this.deviceResolution.screenResolution;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'index': Index;
  }
}
