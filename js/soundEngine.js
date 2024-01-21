import backgroundMusic from '../sounds/music.wav';
import bounce from '../sounds/bounce.mp3';
import shoot from '../sounds/shoot.wav';
import explosion from '../sounds/explosion.wav';
import { Howl } from 'howler';
export class SoundEngine {
  constructor() {
    this._music = new Howl({
      src: backgroundMusic,
      loop: true,
      volume: 0.5,
      html5: true,
    });
    this._bounce = new Howl({
      src: bounce,
      html5: true,
    });
    this._shoot = new Howl({
      src: shoot,
      html5: true,
    });
    this._explosion = new Howl({
      src: explosion,
      html5: true,
    });
  }
  init() {
    this._music.load();
    this._bounce.load();
    this._shoot.load();
    this._explosion.load();
  }
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
