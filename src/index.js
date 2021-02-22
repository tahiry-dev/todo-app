import './css/style.css';
import basic from './components/basic';


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

    let list = document.createElement('div');
    list.className = 'category-list-name';
    list.innerHTML = `
        <p>${category.value}</p>
        <p><input type="radio" name="category" checked></p>
        <p class="delete" >X</p>
        
    `

    categoryList.appendChild(list);

    category.value = '';
});