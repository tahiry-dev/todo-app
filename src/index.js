import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import basic from './components/basic';
import show_project_name from './components/show_name';
import Tasks from './components/tasks';


const basicPage = () => {
    const parent = document.createElement('div');
    parent.innerHTML = `
        ${basic().outerHTML};
    `
    return parent;
}

document.getElementById('wrapper').appendChild(basicPage());

let project_name;
let instance;
let outputTarget = document.getElementById("task-list");

document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'project-name') {
        project_name = document.querySelector('input').value;
        if (project_name == "") {
            let project_name_input_field = document.querySelector('input');
            project_name_input_field.classList = "required";

        } else {
            document.getElementById("project-card").appendChild(show_project_name(project_name));
            document.querySelector('input').value = '';
        }

    } else if (e.target && e.target.id === 'save') {
        let title = document.getElementById("title").value;
        let description = document.getElementById("description").value;
        let date = document.getElementById("date").value;
        let priority = document.getElementById("priority").value;

        instance = new Tasks(project_name, title, description, date, priority);
        instance.create();

    } else if (e.target && e.target.id === 'close') {

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            outputTarget.innerHTML += `
                 <div>
            `
        }

    } else {
        let element = e.target
        if (element.classList.contains('list-group-item')) {
            document.querySelector('.title').innerText = e.target.innerText;
        }
    }
})
