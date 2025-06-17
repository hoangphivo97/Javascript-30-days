const canvas = document.querySelector<HTMLCanvasElement>('#draw');

const ctx = canvas?.getContext('2d');

if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


let drawing: boolean = false;
let lastX = 0;
let lastY = 0
let hue = 0;
let direction = true;

if (ctx) {
    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 100;
}


function draw(e: MouseEvent) {
    if (!drawing) return;
    if (ctx) {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    }
    ctx?.beginPath();
    //start
    ctx?.moveTo(lastX, lastY);
    //go to
    ctx?.lineTo(e.offsetX, e.offsetY);
    ctx?.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue >= 360) {
        hue = 0
    }
    if (ctx) {
        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
            direction = !direction
        }
        if (direction) {
            ctx.lineWidth++
        } else {
            ctx.lineWidth--
        }
    }
}

canvas?.addEventListener('mousedown', (e: MouseEvent) => {
    drawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})

canvas?.addEventListener('mousemove', draw);

canvas?.addEventListener('mouseup', () => drawing = false)
canvas?.addEventListener('mouseout', () => drawing = false)