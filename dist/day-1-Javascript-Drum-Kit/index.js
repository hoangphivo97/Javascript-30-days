"use strict";
function playSound(e) {
    const code = e.code.replace('Key', '');
    const key = document.querySelector(`.key[data-key="${code}"]`);
    const sound = document.querySelector(`audio[data-key="${code}"]`);
    if (!sound)
        return; // Stop the func from running all together
    sound.currentTime = 0;
    sound.play();
    key === null || key === void 0 ? void 0 : key.classList.add('playing');
}
function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});
window.addEventListener('keydown', playSound);
