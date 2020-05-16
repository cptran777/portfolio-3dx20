import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import DeviceResolution, { ScreenResolution } from 'portfolio-3dx20/services/device-resolution';

interface ProfileAboutMeArgs {}

export default class ProfileAboutMe extends Component<ProfileAboutMeArgs> {
  @service
  deviceResolution!: DeviceResolution;

  get screenResolution(): ScreenResolution {
    return this.deviceResolution.screenResolution;
  }
}
