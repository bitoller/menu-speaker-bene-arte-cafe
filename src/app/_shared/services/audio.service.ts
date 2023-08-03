import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private _audio: HTMLAudioElement = new Audio();

  play(src: string) {
    this._audio.src = src;
    this._audio.load();
    this._audio.play();
  }

  next() {
    let src = './assets/audios/audio-next.mp3';
    this.play(src);
  }

  skip() {
    let src = './assets/audios/audio-skip.mp3';
    this.play(src);
  }

  repeat() {
    let src = './assets/audios/audio-repeat.mp3';
    this.play(src);
  }

  addToCart() {
    let src = './assets/audios/audio-addtocart.mp3';
    this.play(src);
  }

  back() {
    let src = './assets/audios/audio-back.mp3';
    this.play(src);
  }

  finishOrder() {
    let src = './assets/audios/audio-finishorder.mp3';
    this.play(src);
  }

  waiter() {
    let src = './assets/audios/audio-waiter.mp3';
    this.play(src);
  }
}
