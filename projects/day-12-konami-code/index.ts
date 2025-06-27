declare function cornify_add(): void;

const pressed: string[] = [];
const secretCode = 'pass';

window.addEventListener('keyup', (e: KeyboardEvent) => {
    pressed.push(e.key);

    pressed.slice(-secretCode.length - 1, pressed.length - secretCode.length)

    if(pressed.join('').includes(secretCode)){
        //trigger event or do something
        console.log('Ding Ding, congrat you find out the password')
        cornify_add();
    }
})