import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import buildRepeatString from 'portfolio-3dx20/utils/build-repeat-string';

interface Song {
  id: string;
  name: string;
  artist: string;
}

const musicList: Array<Song> = [
  { id: 'e-ORhEE9VVg', artist: 'T Swift', name: 'Blank Space' },
  { id: 'MLeIyy2ipps', artist: 'Shinedown', name: '45' },
  { id: 'ZSS5dEeMX64', artist: 'Disney', name: 'Mulean' },
  { id: 'SSR6ZzjDZ94', artist: 'Boston', name: 'More Than a Feeling' },
  { id: 'sZfZ8uWaOFI', artist: 'Aerosmith', name: 'Dream' },
  { id: 'KrZHPOeOxQQ', artist: 'Bon Jovi', name: 'You Give Love a Bad Name' },
  { id: 'kPBzTxZQG5Q', artist: 'Three Doors Down', name: 'Here Without You' },
  { id: 'YQHsXMglC9A', artist: 'Adele', name: 'Hello' },
  { id: 'fJ9rUzIMcZQ', artist: 'Queen', name: 'Bohemian Rhapsody' },
  { id: 'IsUsVbTj2AY', artist: 'Justin Timberlake', name: 'Suit & Tie' },
  { id: 'sOnqjkJTMaA', artist: 'Michael Jackson', name: 'Thriller' },
  { id: 'hT_nvWreIhg', artist: 'One Republic', name: 'Counting Stars' },
  { id: 'ktvTqknDobU', artist: 'Imagine Dragons', name: 'Radioactive' }
];

const averageMaxLengthLine = 36;

interface DesktopInterestsPanelMusicArgs {}

export default class DesktopInterestsPanelMusic extends Component<DesktopInterestsPanelMusicArgs> {
  musicList = musicList.map(song => ({
    ...song,
    spacer: buildRepeatString('_', Math.floor((averageMaxLengthLine - song.artist.length - song.name.length) / 1.1))
  }));

  @tracked
  currentSong = musicList[0];

  @action
  updateCurrentSong(newSong: Song): void {
    this.currentSong = newSong;
  }
}
