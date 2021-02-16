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


let category = document.getElementById('category-button');
let title = document.getElementById('title');
let description = document.getElementById('description');
let dueDate = document.getElementById('deadline');
let priority = document.getElementById('priority');

const submit_button = document.getElementById('submit-button');

submit_button.addEventListener('click', (e) => {
    e.preventDefault();
    let instanciation = new Tasks(category.value, title.value, description.value, dueDate.value, priority.value);
    instanciation.create();

})




