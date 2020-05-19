import Component from '@glimmer/component';

const logoImageRoot = '/assets/images/';

const techStack = [
  { name: 'React', asset: 'react.png' },
  { name: 'Redux', asset: 'redux.png' },
  { name: 'Virtual Reality', asset: 'vr.png' },
  { name: 'WebGL', asset: 'webgl.png' },
  { name: 'Three.js', asset: 'threejs.png' },
  { name: 'Node', asset: 'node.png' },
  { name: 'Express', asset: 'express.png' },
  { name: 'PostgreSQL', asset: 'postgres.png' },
  { name: 'WebSockets', asset: 'websocket.png' },
  { name: 'WebRTC', asset: 'webrtc.png' },
  { name: 'Redis', asset: 'redis.png' },

].map(skill => ({
  ...skill,
  asset: `${logoImageRoot}logo-${skill.asset}`
}));

interface PortfolioAvalonDetailArgs {}

export default class PortfolioAvalonDetail extends Component<PortfolioAvalonDetailArgs> {
  techStack = techStack;
}
