export default function checkInput() {
    if (category.value === '') {
        category.className = 'required';
        category.setAttribute('placeholder', 'This field is required');
        setTimeout(() => {
            category.removeAttribute('class');
            category.setAttribute('placeholder', 'Category Name');
        }, 1500)

        return
    }
}