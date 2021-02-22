import './css/style.css';
import basic from './components/basic';
import deleteItem from './components/delete';


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


addCategory.addEventListener('click', (e) => {
    e.preventDefault();
    if (category.value === '') {
        category.setAttribute('placeholder', 'This field is required');
        category.classList.add('required');
        setTimeout(() => {
            category.setAttribute('placeholder', 'category-name');
            category.removeAttribute('class');
        }, 1500)
        return
    }

    let listContainer = document.createElement('div');
    listContainer.className = 'category-list-name';

    let list = document.createElement('p');
    list.innerText = category.value;

    let radioBtn = document.createElement('input');
    radioBtn.setAttribute('type', 'radio');
    radioBtn.setAttribute('name', 'category');
    radioBtn.setAttribute('checked', '');

    let closeBtn = document.createElement('p');
    closeBtn.className = 'delete-button';
    closeBtn.innerText = 'X';

    listContainer.appendChild(list);
    listContainer.appendChild(radioBtn);
    listContainer.appendChild(closeBtn);
    categoryList.appendChild(listContainer);

    category.value = '';

    closeBtn.addEventListener('click', deleteItem)

});