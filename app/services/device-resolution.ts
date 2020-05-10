import Service from '@ember/service';
import { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { debounce } from '@ember/runloop';

export enum ScreenResolution {
  mobile = 'mobile',
  tablet = 'tablet',
  laptop = 'laptop',
  desktop = 'desktop'
}

export default class DeviceResolution extends Service {
  /**
   * Determination of current screen resolution. Depending on the size of the screen, we will want to
   * adjust application behavior accordingly
   */
  @tracked
  screenResolution: ScreenResolution = ScreenResolution.desktop;

  @computed('screenResolution')
  get isDesktop(): boolean {
    const resolution = this.screenResolution;
    return (resolution === ScreenResolution.laptop) || (resolution === ScreenResolution.desktop);
  }

  determineScreenResolution(): void {
    this.screenResolution =
      window.matchMedia('screen and (max-width: 768px)').matches ? ScreenResolution.mobile :
      window.matchMedia('screen and (max-width: 900px)').matches ? ScreenResolution.tablet :
      window.matchMedia('screen and (max-width: 1140px)').matches ? ScreenResolution.laptop :
      ScreenResolution.desktop;

    // Temporary code:
    this.screenResolution = ScreenResolution.desktop;
  }

  constructor() {
    super(...arguments);
    this.determineScreenResolution();
    window.addEventListener('resize', () => {
      debounce(this.determineScreenResolution.bind(this), 250, true);
    });
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'device-resolution': DeviceResolution;
  }
}
