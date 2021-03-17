/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
test('displayAddBox pop up form to add new tasks', () => {
  const displayAddBox = () => {
    dimBackground();

    const boxCtn = document.createElement('form');
    boxCtn.classList.add('new-box-ctn');

    const h1 = document.createElement('h1');
    h1.textContent = 'New To-Do';
    boxCtn.appendChild(h1);

    const currentActiveList = document.createElement('p');

    toDoArray.forEach(list => {
      if (list.active === true) {
        currentActiveList.textContent = `${list.list} list`;
        boxCtn.appendChild(currentActiveList);
      }
    });

    const title = document.createElement('input');
    title.setAttribute('id', 'box-title-input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title');
    title.setAttribute('value', '');
    title.setAttribute('autocomplete', 'off');

    const border = document.createElement('div');
    border.style.border = '1px grey solid';
    border.style.opacity = '0.2';
    border.style.margin = '1em 0.5em';

    const dateCtn = document.createElement('div');
    dateCtn.classList.add('box-date-ctn');

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'box-date');
    dateLabel.textContent = 'Due Date';
    dateCtn.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'box-date');
    dateInput.setAttribute('name', 'Due date');
    dateCtn.appendChild(dateInput);

    const priorityCtn = document.createElement('form');
    priorityCtn.classList.add('prio-select-ctn');

    const legend = document.createElement('legend');
    legend.textContent = 'Priority';
    priorityCtn.appendChild(legend);

    const prioForm = document.createElement('form');
    priorityCtn.appendChild(prioForm);

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'priority');
    input.setAttribute('id', 'box-prio-checkbox');
    input.setAttribute('value', 'important');

    prioForm.appendChild(input);

    const label = document.createElement('label');
    label.setAttribute('for', 'priority');
    label.classList.add('prio-label');
    label.textContent = 'Important!';

    prioForm.appendChild(label);

    const actionCtn = document.createElement('div');
    actionCtn.classList.add('action-ctn');
    actionCtn.style.display = 'flex';
    actionCtn.style.justifyContent = 'space-evenly';
    actionCtn.style.alignSelf = 'center';

    const newBtn = document.createElement('button');
    newBtn.classList.add('add-todo-btn');
    newBtn.style.pointerEvents = 'none';
    newBtn.style.opacity = '0.3';
    newBtn.setAttribute('type', 'button');
    newBtn.textContent = 'Add To-Do';

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('box-cancel-btn');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.backgroundColor = 'grey';

    title.addEventListener('input', () => {
      if (title.value !== '') {
        newBtn.style.pointerEvents = 'auto';
        newBtn.style.opacity = '1';
      } else {
        newBtn.style.pointerEvents = 'none';
        newBtn.style.opacity = '0.3';
      }
    });

    actionCtn.appendChild(newBtn);
    actionCtn.appendChild(cancelBtn);

    boxCtn.appendChild(title);
    boxCtn.appendChild(border);
    boxCtn.appendChild(dateCtn);
    boxCtn.appendChild(priorityCtn);
    boxCtn.appendChild(actionCtn);

    return boxCtn;

    expect(boxCtn).toEqual("<form class='new- box - ctn'><h1>New To-Do</h1><p>Game list</p><input id='box - title - input' type='text' placeholder='Title' value='' autocomplete='off'><div style='border: 1px solid grey; opacity: 0.2; margin: 1em 0.5em; '></div><div class='box - date - ctn'><label for='box - date'>Due Date</label><input type='date' id='box - date' name='Due date'></div><form class='prio - select - ctn'><legend>Priority</legend><form><input type='checkbox' name='priority' id='box - prio - checkbox' value='important'><label for='priority' class='prio - label'>Important!</label></form></form><div class='action - ctn' style='display: flex; justify - content: space - evenly; align - self: center; '><button class='add - todo - btn' type='button' style='pointer - events: none; opacity: 0.3; '>Add To-Do</button><button class='box - cancel - btn' style='background - color: grey; '>Cancel</button></div></form>");
  };
});

test('pop up to add new category', () => {
  const displayNewListBox = () => {
    dimBackground();

    const boxCtn = document.createElement('form');
    boxCtn.classList.add('new-box-ctn');
    boxCtn.style.height = '20em';

    const h1 = document.createElement('h1');
    h1.style.marginBottom = '0.5em';
    h1.style.textAlign = 'center';
    h1.textContent = 'New Category';

    const title = document.createElement('input');
    title.setAttribute('id', 'list-name-input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Category name');
    title.setAttribute('value', '');
    title.setAttribute('autocomplete', 'off');

    const border = document.createElement('div');
    border.style.border = '1px grey solid';
    border.style.opacity = '0.2';
    border.style.margin = '1em 0.5em';

    const notes = document.createElement('input');
    notes.setAttribute('id', 'box-notes-input');
    notes.setAttribute('type', 'text');
    notes.setAttribute('placeholder', 'Notes (Optional)');
    notes.setAttribute('value', '');
    notes.setAttribute('autocomplete', 'off');
    notes.style.marginBottom = '2em';

    const actionCtn = document.createElement('div');
    actionCtn.classList.add('action-ctn');
    actionCtn.style.display = 'flex';
    actionCtn.style.justifyContent = 'space-evenly';
    actionCtn.style.alignSelf = 'center';

    const newBtn = document.createElement('button');
    newBtn.style.pointerEvents = 'none';
    newBtn.style.opacity = '0.3';
    newBtn.classList.add('add-list-btn');
    newBtn.setAttribute('type', 'button');
    newBtn.textContent = 'Add Category';

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('box-cancel-btn');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.backgroundColor = 'grey';

    title.addEventListener('input', () => {
      if (title.value !== '') {
        newBtn.style.pointerEvents = 'auto';
        newBtn.style.opacity = '1';
      } else {
        newBtn.style.pointerEvents = 'none';
        newBtn.style.opacity = '0.3';
      }
    });

    actionCtn.appendChild(newBtn);
    actionCtn.appendChild(cancelBtn);
    boxCtn.appendChild(h1);
    boxCtn.appendChild(title);
    boxCtn.appendChild(border);
    boxCtn.appendChild(notes);
    boxCtn.appendChild(actionCtn);

    return boxCtn;
    expect(boxCtn).toEqual("<form class='new- box - ctn' style='height: 20em; '><h1 style='margin - bottom: 0.5em; text - align: center; '>New Category</h1><input id='list - name - input' type='text' placeholder='Category name' value='' autocomplete='off'><div style='border: 1px solid grey; opacity: 0.2; margin: 1em 0.5em; '></div><input id='box - notes - input' type='text' placeholder='Notes(Optional)' value='' autocomplete='off' style='margin - bottom: 2em; '><div class='action - ctn' style='display: flex; justify - content: space - evenly; align - self: center; '><button class='add - list - btn' type='button' style='pointer - events: none; opacity: 0.3; '>Add Category</button><button class='box - cancel - btn' style='background - color: grey; '>Cancel</button></div></form>");
  };
});

test('pop up edit box', () => {
  const displayEditListBox = (listInfo) => {
    dimBackground();

    const boxCtn = document.createElement('form');
    boxCtn.classList.add('new-box-ctn');
    boxCtn.style.height = '20em';

    const h1 = document.createElement('h1');
    h1.style.marginBottom = '0.5em';
    h1.style.textAlign = 'center';
    h1.textContent = 'Edit Category';

    const title = document.createElement('input');
    title.setAttribute('id', 'list-name-input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'List name');
    title.setAttribute('value',
      listInfo.firstChild.children[0].textContent);
    title.setAttribute('autocomplete', 'off');

    const border = document.createElement('div');
    border.style.border = '1px grey solid';
    border.style.opacity = '0.2';
    border.style.margin = '1em 0.5em';

    const notes = document.createElement('input');
    notes.setAttribute('id', 'box-notes-input');
    notes.setAttribute('type', 'text');
    notes.setAttribute('placeholder', 'Notes (Optional)');
    if (listInfo.firstChild.children[1] === undefined) {
      notes.setAttribute('value', '');
    } else {
      notes.setAttribute('value',
        listInfo.firstChild.children[1].textContent);
    }
    notes.setAttribute('autocomplete', 'off');
    notes.addEventListener('input', () => {
      if (title.value !== '') {
        /* eslint-disable no-use-before-define */
        newBtn.style.pointerEvents = 'auto';
        newBtn.style.opacity = '1';
      } else {
        newBtn.style.pointerEvents = 'none';
        newBtn.style.opacity = '0.3';
      }
      /* eslint-enable no-use-before-define */
    });
    notes.style.marginBottom = '2em';

    const actionCtn = document.createElement('div');
    actionCtn.classList.add('action-ctn');
    actionCtn.style.display = 'flex';
    actionCtn.style.justifyContent = 'space-evenly';
    actionCtn.style.alignSelf = 'center';

    const newBtn = document.createElement('button');
    newBtn.style.pointerEvents = 'none';
    newBtn.style.opacity = '0.3';
    newBtn.classList.add('edit-list-btn');
    newBtn.setAttribute('type', 'button');
    newBtn.setAttribute('value', listInfo.value);
    newBtn.textContent = 'Edit Category';

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('box-cancel-btn');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.backgroundColor = 'grey';

    title.addEventListener('input', () => {
      if (title.value !== '') {
        newBtn.style.pointerEvents = 'auto';
        newBtn.style.opacity = '1';
      } else {
        newBtn.style.pointerEvents = 'none';
        newBtn.style.opacity = '0.3';
      }
    });

    actionCtn.appendChild(newBtn);
    actionCtn.appendChild(cancelBtn);
    boxCtn.appendChild(h1);
    boxCtn.appendChild(title);
    boxCtn.appendChild(border);
    boxCtn.appendChild(notes);
    boxCtn.appendChild(actionCtn);

    return boxCtn;
    expect(boxCtn).toEqual("<form class='new-box-ctn' style='height: 20em;'><h1 style='margin-bottom: 0.5em; text-align: center;'>Edit Category</h1><input id='list-name-input' type='text' placeholder='List name' value='Game' autocomplete='off'><div style='border: 1px solid grey; opacity: 0.2; margin: 1em 0.5em;'></div><input id='box-notes-input' type='text' placeholder='Notes (Optional)' value='' autocomplete='off' style='margin-bottom: 2em;'><div class='action-ctn' style='display: flex; justify-content: space-evenly; align-self: center;'><button class='edit-list-btn' type='button' value='1615987096376' style='pointer-events: none; opacity: 0.3,'>Edit Category</button><button class='box-cancel-btn' style='background-color: grey;'>Cancel</button></div></form>");
  };
});

test('pop up the confirmation box', () => {
  const confirmBoxLists = (val) => {
    dimBackground();

    const boxCtn = document.createElement('form');
    boxCtn.classList.add('new-box-ctn');
    boxCtn.setAttribute('id', 'confirm-box');
    const h1 = document.createElement('h1');

    h1.style.textAlign = 'center';
    h1.textContent = 'Are you sure you want to remove this category?';

    const actionCtn = document.createElement('div');
    actionCtn.classList.add('action-ctn');

    const rmvBtn = document.createElement('button');
    rmvBtn.classList.add('remove-list-btn');
    rmvBtn.setAttribute('type', 'button');
    rmvBtn.setAttribute('id', 'remove-btn');
    rmvBtn.setAttribute('value', val.value);
    rmvBtn.textContent = 'Yes';

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('box-cancel-btn');
    cancelBtn.textContent = 'I want to keep it!';
    cancelBtn.style.backgroundColor = 'grey';

    actionCtn.appendChild(rmvBtn);
    actionCtn.appendChild(cancelBtn);

    boxCtn.appendChild(h1);
    boxCtn.appendChild(actionCtn);

    return boxCtn;
    expect(boxCtn).toEqual("<form class='new-box-ctn' id='confirm-box'><h1 style='text-align: center;'>Are you sure you want to remove this category?</h1><div class='action-ctn'><button class='remove-list-btn' type='button' id='remove-btn' value='1615987096376'>Yes</button><button class='box-cancel-btn' style='background-color: grey;'>I want to keep it!</button></div></form>");
  };
});

/* eslint-enable no-unused-vars */
/* eslint-enable no-undef */
/* eslint-enable no-unreachable */
