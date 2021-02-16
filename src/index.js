import './css/style.css';
import basic from './components/basic';
import Tasks from './components/tasks';



const basicPage = () => {
    const parent = document.createElement('div');
    parent.innerHTML = `
        ${basic().outerHTML};
    `
    return parent;
}

document.getElementById('wrapper').appendChild(basicPage());

let category = document.getElementById('category');
let title = document.getElementById('title');
let description = document.getElementById('description');
let dueDate = document.getElementById('deadline');
let priority = document.getElementById('priority');

const submit_button = document.getElementById('submit-button');

submit_button.addEventListener('click', (e) => {
    e.preventDefault();
    if (category.value === '') {
        category.className = 'required';
        category.setAttribute('placeholder', 'This field is required');
        setTimeout(() => {
            category.removeAttribute('class');
            category.setAttribute('placeholder', 'Category Name');
        }, 1500)

        return
    }
    let instantiation = new Tasks(category.value, title.value, description.value, dueDate.value, priority.value);
    instantiation.create();
})




