import { baseURL } from '../../api';

export function playAudio(src: string): void {
  const audio = new Audio();
  audio.src = `${baseURL}/${src}`;
  audio.play();
}
