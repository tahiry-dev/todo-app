import './css/style.css';
import basic from './components/basic';
import deleteItem from './components/delete';
import checkInput from './components/check';
import Tasks from './components/tasks';


const basicPage = () => {
    const parent = document.createElement('div');
    parent.innerHTML = `
        ${basic().outerHTML};
    `
    return parent;
}

document.getElementById('wrapper').appendChild(basicPage());

let addCategory = document.getElementsByTagName('button')[0];
let category = document.getElementsByTagName('input')[0];
let categoryList = document.getElementById('category-list');
let taskBtn = document.getElementsByTagName('button')[1];
let taskTitle = document.getElementById('title');

addCategory.addEventListener('click', (e) => {

    e.preventDefault();

    if (category.value === '') {
        checkInput(category, 'category-name');
        return
    }

    let listContainer = document.createElement('div');
    listContainer.className = 'category-list-name';

    let list = document.createElement('p');
    list.innerText = category.value;

    let radioBtn = document.createElement('input');
    radioBtn.setAttribute('class', 'myRadio');
    radioBtn.setAttribute('type', 'radio');
    radioBtn.setAttribute('name', 'category');
    radioBtn.setAttribute('value', `${category.value}`);
    radioBtn.setAttribute('checked', '');

    let closeBtn = document.createElement('p');
    closeBtn.className = 'delete-button';
    closeBtn.innerText = 'X';

    listContainer.appendChild(list);
    listContainer.appendChild(radioBtn);
    listContainer.appendChild(closeBtn);
    categoryList.appendChild(listContainer);

    category.value = '';

    closeBtn.addEventListener('click', deleteItem);
});

taskBtn.addEventListener('click', (e) => {

    e.preventDefault();

    if (taskTitle.value === '') {
        checkInput(taskTitle, 'your title');
        return
    }

    let allRadio = document.querySelector('input[name="category"]:checked');

    let categoryInput = allRadio.value;
    let titleInput = taskTitle.value;
    let descriptionInput = document.getElementById('description').value;
    let dateInput = document.getElementById('date').value;
    let priorityInput = document.getElementById('priority').value;

    taskTitle.value = '';

    let newInstance = new Tasks(categoryInput, titleInput, descriptionInput, dateInput, priorityInput);
    newInstance.create();

    console.log(newInstance);
})



