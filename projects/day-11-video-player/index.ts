const player = document.querySelector<HTMLElement>('.player');
const video = player?.querySelector<HTMLVideoElement>('.viewer');
const progress = player?.querySelector<HTMLVideoElement>('.progress')
const progressBar = player?.querySelector<HTMLVideoElement>('.progress__filled');

const toggle = player?.querySelector<HTMLVideoElement>('.toggle');
const skipButtons = player?.querySelectorAll('[data-skip]');
const ranges = player?.querySelectorAll<HTMLVideoElement>('.player__slider');

function toggleVideo() {
    if (video?.paused) {
        video.play()
    } else {
        video?.pause()
    }
}

function updateButton(this: HTMLVideoElement) {
    const icon = this.paused ? '▷' : '❚❚'
    if (toggle) {
        toggle.textContent = icon;
    }
}

function skipBtn(this: HTMLElement) {
    if (video) {
        video.currentTime += parseFloat(this.dataset.skip as string)
    }
}

function handleRangeUpdate(this: HTMLInputElement) {
    if (video) {
        if (this.name === "volume" || this.name === "playbackRate") {
            video[this.name] = parseFloat(this.value)
        }
    }
}

function handleProgress() {
    if (video && progressBar) {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${percent}%`
    }
}

function scrub(event: MouseEvent) {
    if (progress && event && video) {
        const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration
        video.currentTime = scrubTime
    }
}

video?.addEventListener('click', toggleVideo);
video?.addEventListener('play', updateButton)
video?.addEventListener('pause', updateButton)
video?.addEventListener('timeupdate', handleProgress)


progress?.addEventListener('click', scrub);

let mousedown = false;
progress?.addEventListener('mousedown', () => mousedown = true)
progress?.addEventListener('mouseup', () => mousedown = false)
progress?.addEventListener('mousemove', (e) => mousedown && scrub(e))

toggle?.addEventListener('click', toggleVideo)

skipButtons?.forEach(btn => btn.addEventListener('click', skipBtn))

ranges?.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges?.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))