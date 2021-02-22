export default function checkInput(inputValue, origiName) {
    inputValue.setAttribute('placeholder', 'This field is required');
    inputValue.classList.add('required');
    setTimeout(() => {
        inputValue.setAttribute('placeholder', `${origiName}`);
        inputValue.removeAttribute('class');
    }, 1500)
}