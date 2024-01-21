import backgroundMusic from '../sounds/music.mp3';
import bounce from '../sounds/bounce.mp3';
import shoot from '../sounds/shoot.mp3';
import explosion from '../sounds/explosion.mp3';
import { Howl } from 'howler';
export class SoundEngine {
  constructor() {
    this._music = new Howl({
      src: backgroundMusic,
      loop: true,
      volume: 0.5,
      // preload: false,
    });
    this._bounce = new Howl({
      src: bounce,
      // preload: false,
    });
    this._shoot = new Howl({
      src: shoot,
      // preload: false,
    });
    this._explosion = new Howl({
      src: explosion,
      // preload: false,
    });
  }
  // init() {
  //   this._music.load();
  //   this._bounce.load();
  //   this._shoot.load();
  //   this._explosion.load();
  // }
  playMusic() {
    this._music.play();
  }
  stopMusic() {
    this._music.stop();
  }
  bounce() {
    this._bounce.play();
  }
  shot() {
    this._shoot.play();
  }
  explosion() {
    this._explosion.play();
  }
}
