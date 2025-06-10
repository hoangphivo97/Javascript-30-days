const secondHand = document.querySelector<HTMLElement>('.second');
const minuteHand = document.querySelector<HTMLElement>('.minute')
const hourHand = document.querySelector<HTMLElement>('.hour')

function setDate() {
    const now = new Date();
    const second: number = now.getSeconds();


    const secondDeg: number = ((second / 60) * 360) + 90;

    if (secondHand) {
        secondHand.style.transform = `rotate(${secondDeg}deg)`;
    }

    const minute: number = now.getMinutes();
    const minuteDeg: number = ((minute / 60) * 360) + 90;

    if (minuteHand) {
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    }

    const hourDeg: number = ((minute / 12) * 360) + 90;
    if (hourHand) {
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
    }
}

setInterval(setDate, 1000);