function playSound(e: KeyboardEvent) {
    const code: string = e.code.replace('Key', '')
    const key: HTMLElement | null = document.querySelector<HTMLElement>(`.key[data-key="${code}"]`)
    const sound: HTMLAudioElement | null = document.querySelector<HTMLAudioElement>(`audio[data-key="${code}"]`);
    if (!sound) return; // Stop the func from running all together
    sound.currentTime = 0;
    sound.play();
    key?.classList.add('playing')
}



function removeTransition(this: HTMLElement, e: TransitionEvent) : void {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

const keys: NodeListOf<Element> = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition as EventListener)
})

window.addEventListener('keydown', playSound)
