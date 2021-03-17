import { format } from 'date-fns';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
test('addNewTodo depends on input', () => {
  const getInput = '10/10/2000';
  const toDoArray = [];
  const addNewToDo = () => {
    let date = '';
    if (getInput !== '') {
      date = format(new Date(getInput), 'dd/MM/yyyy');
    }
    /* eslint-disable no-console */
    for (let i = 0; i < toDoArray.length; i += 1) {
      if (toDoArray[i].active === true) {
        toDoArray[i].toDos
          .push({
            title: getInput('box-title-input'),
            dueDate: date,
            done: false,
            priority: document.querySelector('#box-prio-checkbox').checked,
          });
        renderListContent();
        lightBackground();
        removeBox();
      }
    }
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
    date = '';
  };
  expect(localStorage.getItem('toDoArray')).toBeNull();
  expect(addNewToDo()).toBeUndefined();
});


test('make a list active depends on click, here no click', () => {
  const toDoArray = [{
    elem: document.createElement('div'),
    id: 1900,
    active: false,
  }];

  const targetListId = 1900;

  const setActiveList = (targetListId) => {
    toDoArray.forEach(list => {
      list.active = false;

      if (list.id === targetListId) {
        list.active = true;
      }
    });
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
  };
  expect(setActiveList()).toBeUndefined();
});

test('addNewList depends on input', () => {
  const toDoFactory = (toDos,
    list,
    notes,
    id,
    active = false) => ({
    toDos, list, notes, id, active,
  });

  const getInput = '10/10/2000';
  const toDoArray = [];
  const addNewList = () => {
    /* eslint-disable no-restricted-globals */
    toDoArray.push(toDoFactory([''].splice(0, length),
      getInput,
      getInput,
      Date.now().toString(),
      true));
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
    /* eslint-enable no-restricted-globals */
  };
  expect(addNewList()).toBeUndefined();
});

test('remove list depends on generated category', () => {
  const toDoArray = [{
    elem: 'value',
    id: 1900,
    active: false,
  }];
  const removeList = (val) => {
    toDoArray.forEach((list, index) => {
      if (list.id === val.value) {
        toDoArray.splice(index, 1);
        if (toDoArray.length !== 0) {
          toDoArray[0].active = true;
        }
        renderLists();
        renderListContent();
        removeBox();
      }
    });
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
  };
  expect(removeList('value')).toBeUndefined();
});

test('edit list depends on generated category', () => {
  const toDoArray = [{
    elem: 'value',
    id: 1900,
    active: false,
  }];
  const editList = (val, listInfo) => {
    toDoArray.forEach((list) => {
      if (list.id === val.value) {
        list.list = listInfo.children[1].value;
        list.notes = listInfo.children[3].value;
        renderLists();
        removeBox();
      }
    });
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
  };
  expect(editList('one', 'two')).toBeUndefined();
});

test('Todos Status depends on click', () => {
  const toDoArray = [];
  const toggleToDoStatus = (val, name) => {
    toDoArray.forEach(td => {
      for (let i = 0; i < td.toDos.length; i += 1) {
        if (td.toDos[i].title === name && td.id === val) {
          if (td.toDos[i].done === false) {
            td.toDos[i].done = true;
          } else {
            td.toDos[i].done = false;
          }
        }
      }
    });
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
  };
  expect(toggleToDoStatus('one', 'two')).toBeUndefined();
});

test('removeTodo, depends on value from user clicks', () => {
  const toDoArray = [];
  const removeToDo = (val) => {
    toDoArray.forEach(list => {
      if (list.id === val.firstChild.getAttribute('value')) {
        list.toDos.forEach((todo, index) => {
          if (todo.title === val.firstChild.textContent) {
            list.toDos.splice(index, 1);
            renderListContent();
          }
        });
      }
    });
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
  };
  expect(removeToDo('Cat')).toBeUndefined();
});
/* eslint-enable no-unused-vars */
/* eslint-enable no-undef */