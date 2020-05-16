import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import DeviceResolution, { ScreenResolution } from 'portfolio-3dx20/services/device-resolution';

const logoImageRoot = 'assets/images/';

const skills = [
  { name: 'Javascript', asset: 'js.png' },
  { name: 'Ember JS', asset: 'ember.png' },
  { name: 'Redux', asset: 'redux.png' },
  { name: 'React', asset: 'react.png' },
  { name: 'jQuery', asset: 'jquery.gif' },
  { name: 'D3', asset: 'd3.png' },
  { name: 'Highcharts', asset: 'highcharts.jpg' },
  { name: 'Three.js', asset: 'threejs.png' },
  { name: 'Create.js', asset: 'createjs.png' },
  { name: 'Java', asset: 'java.png' },
  { name: 'Node', asset: 'node.png' },
  { name: 'Express', asset: 'express.png' },
  { name: 'MySQL', asset: 'mysql.png' },
  { name: 'PostgreSQL', asset: 'postgres.png' },
  { name: 'Python', asset: 'python.png' },
  { name: 'WebSockets', asset: 'websocket.png' },
  { name: 'WebRTC', asset: 'webrtc.png' },
  { name: 'Unity', asset: 'unity.png' },
  { name: 'C#', asset: 'csharp.png' },
  { name: 'RPG Maker', asset: 'rpg-maker-mv.png' }
].map(skill => ({
  ...skill,
  asset: `${logoImageRoot}logo-${skill.asset}`
}));

interface ProfileMySkillsArgs {}

export default class ProfileMySkills extends Component<ProfileMySkillsArgs> {
  skills = skills;

  @service
  deviceResolution!: DeviceResolution;

  get screenResolution(): ScreenResolution {
    return this.deviceResolution.screenResolution;
  }
}
