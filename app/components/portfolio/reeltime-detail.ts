import Component from '@glimmer/component';

const logoImageRoot = '/assets/images/';

const techStack = [
  { name: 'React', asset: 'react.png' },
  { name: 'Node', asset: 'node.png' },
  { name: 'Express', asset: 'express.png' },
  { name: 'WebSockets', asset: 'websocket.png' },
  { name: 'WebRTC', asset: 'webrtc.png' },
  { name: 'Twilio', asset: 'twilio.png' }
].map(skill => ({
  ...skill,
  asset: `${logoImageRoot}logo-${skill.asset}`
}));

interface PortfolioReeltimeDetailArgs {}

export default class PortfolioReeltimeDetail extends Component<PortfolioReeltimeDetailArgs> {
  techStack = techStack;
}
