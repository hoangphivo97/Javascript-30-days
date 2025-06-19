const checkboxs = document.querySelectorAll('.checkbox input[type="checkbox"]');

let lastChecked: HTMLInputElement;

function handleCheck(e: Event) {
    let inBetween = false;
    const checkboxed = e.currentTarget as HTMLInputElement;
    const mouseEvent = e as MouseEvent;
    // console.log(checkbox.checked);
    // console.log(mouseEvent.shiftKey);
    if (checkboxed.checked && mouseEvent.shiftKey) {
        checkboxs.forEach(checkbox => {
            const inputElement = checkbox as HTMLInputElement

            if (inputElement === checkboxed || inputElement === lastChecked) {
                inBetween = !inBetween
            }
            if (inBetween) {
                inputElement.checked = true
            }
        })
    }
    lastChecked = checkboxed
}

checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));