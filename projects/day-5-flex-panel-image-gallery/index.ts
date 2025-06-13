const panel = document.querySelectorAll<HTMLElement>('.panel');

function togglePanel(this: HTMLElement) {
    this.classList.toggle('open')
}

function toggleActive(this: HTMLElement, e: TransitionEvent) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panel.forEach((panel: HTMLElement) => panel.addEventListener('click', togglePanel))
panel.forEach((panel: HTMLElement) => panel.addEventListener('transitionend', toggleActive))