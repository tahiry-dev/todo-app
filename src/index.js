import './css/style.css';
import basic from './components/basic';
// import Tasks from './components/tasks';
import getName from './components/getCategoryName';

const basicPage = () => {
    const parent = document.createElement('div');
    parent.innerHTML = `
        ${basic().outerHTML};
    `
    return parent;
}

document.getElementById('wrapper').appendChild(basicPage());

const leftBtn = document.getElementById('category-button')
const categoryInpt = document.getElementById('category');
const showCategory = document.querySelector('.list-of-category')
let listOfCategory = [];

leftBtn.addEventListener('click', (e) => {

    e.preventDefault();

    if (categoryInpt.value === '') {
        categoryInpt.className = 'required';
        categoryInpt.setAttribute('placeholder', 'This field is required');
        setTimeout(() => {
            categoryInpt.removeAttribute('class');
            categoryInpt.setAttribute('placeholder', 'Category Name');
        }, 1500)

        return
    }

    let category = getName(categoryInpt.value);

    categoryInpt.value = '';

    displayCategory(category);

    function displayCategory(category) {
        const item = document.createElement('li');
        item.setAttribute('data-key', category.id);

        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.className = 'radio';
        // inputResult.addEventListener('click', tacheFaite);
        item.appendChild(input)

        const name = document.createElement('span');
        name.innerText = category.name;
        item.appendChild(name);

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'close-btn');
        deleteBtn.innerText = 'X';

        item.appendChild(deleteBtn);

        showCategory.appendChild(item);
        listOfCategory.push(item);
    }

    const deleteName = document.querySelectorAll('.close-btn');
    deleteName.forEach(item => {
        item.parentNode.addEventListener('click', deleteItem);
    })

    function deleteItem(e) {
        listOfCategory.forEach(el => {
            if (e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')) {
                el.remove();
                listOfCategory = listOfCategory.filter(li => li.dataset.key !== el.dataset.key);
            }
        })
    }
})