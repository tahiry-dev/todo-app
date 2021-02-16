import './css/style.css';
import basic from './components/basic';
import Tasks from './components/tasks';
import checkInput from './components/check';



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
const add_button = document.getElementById('category-button');



submit_button.addEventListener('click', (e) => {
    e.preventDefault();
    checkInput();
    let instantiation = new Tasks(category.value, title.value, description.value, dueDate.value, priority.value);
    instantiation.create();
})

add_button.addEventListener('click', (e) => {
    e.preventDefault();
    checkInput();
    let categoryElements = document.createElement('li');
    if (category.value !== '') {
        categoryElements.innerHTML = `
            <div class="cat-container">
                <p>${category.value}</p>
                <p><input type="radio" name="cat" value="${category.value}" </p>
            </div>
            `
        document.querySelector('.list-of-category').appendChild(categoryElements);
        category.value = ' ';
    }

})
