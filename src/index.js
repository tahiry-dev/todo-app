import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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