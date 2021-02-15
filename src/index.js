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


let category;
let instanciation;

let title = document.getElementById('title').value;
let description = document.getElementById('description').value;
let dueDate = document.getElementById('deadline').value;
let priority = document.getElementById('priority').value;

const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let clickedButton = e.target.getAttribute('name');
        if (clickedButton === 'category') {
            category = document.getElementById('category').value;
            document.getElementById('category').value = '';
            console.log(category);
        } else if (clickedButton === 'data') {
            instanciation = new Tasks(category, title, description, dueDate, priority);
        }
    })

})

