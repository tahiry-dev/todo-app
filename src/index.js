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
let taskList = document.getElementById('task-list');
let defaultCategory = document.querySelector('input[name="category"]:checked').value;
let defaultChoice = document.getElementById('default-choice');
let theCategory = localStorage.setItem('check', defaultCategory);



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
    radioBtn.setAttribute('value', category.value);

    let closeBtn = document.createElement('p');
    closeBtn.className = 'delete-button';
    closeBtn.innerText = 'X';

    listContainer.appendChild(list);
    listContainer.appendChild(radioBtn);
    listContainer.appendChild(closeBtn);
    categoryList.appendChild(listContainer);

    category.value = '';

    closeBtn.addEventListener('click', deleteItem);

    defaultChoice.addEventListener('change', () => {
        theCategory = defaultChoice.value;
        localStorage.setItem('check', theCategory);

    })

    radioBtn.addEventListener('change', () => {
        theCategory = radioBtn.value;
        localStorage.setItem('check', theCategory);
    })

});

taskBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (taskTitle.value === '') {
        checkInput(taskTitle, 'category-name');
        return
    }

    let titleArr = [];

    const checkedCategory = "default";
    let chosenCategory = localStorage.getItem('check');
    let elements = document.createElement('li');


    if (chosenCategory === checkedCategory) {
        titleArr.push(taskTitle.value);
        localStorage.setItem(checkedCategory, titleArr);
        elements.setAttribute('class', 'default');
        elements.innerText = localStorage.getItem(checkedCategory);
    } else {
        titleArr.push(taskTitle.value);
        localStorage.setItem(chosenCategory, titleArr);
        elements.setAttribute('class', chosenCategory);
        elements.innerText = localStorage.getItem(chosenCategory);
    }

    taskTitle.value = '';

    taskList.appendChild(elements);

    let elFilter = document.querySelector('.default');
    elFilter.style.display = "none";

});




