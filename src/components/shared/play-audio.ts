export function playAudio(src: string): void {
  const audio = new Audio();
  audio.src = `../../assets/${src}`;
  audio.play();
}
