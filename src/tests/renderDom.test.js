test('Should return Shopping', () => {

    let toDoArray = ['Shopping'];

    const renderLists = () => {
        const listsCtn = document.createElement('div');
        listsCtn.setAttribute('id', 'todo-lists');
        listsCtn.style.opacity = '1';

        while (listsCtn.firstChild) {
            listsCtn.removeChild(listsCtn.firstChild);
        }


        if (toDoArray.length === 0) {
            const emptyGuide = document.createElement('p');
            emptyGuide.style.textAlign = 'center';
            emptyGuide.textContent = 'No lists were found';

            listsCtn.style.opacity = '0.3';

            listsCtn.appendChild(emptyGuide);
        }

        toDoArray.forEach((elem) => {
            const listCtn = document.createElement('button');
            listCtn.classList.add('lists-tab-link');
            listCtn.setAttribute('value', elem.id);
            listCtn.setAttribute('type', 'button');
            listsCtn.appendChild(listCtn);

            const listInfoCtn = document.createElement('div');
            listInfoCtn.classList.add('list-info-ctn');
            listCtn.appendChild(listInfoCtn);

            const list = document.createElement('h1');
            list.classList.add('list-item');
            list.textContent = elem.list;
            listInfoCtn.appendChild(list);

            expect(list).toEqual("<h1 class='list-item'>Shopping</h1>");

            const notes = document.createElement('p');
            notes.style.textAlign = 'left';
            notes.classList.add('notes-item');
            notes.textContent = elem.notes;

            if (elem.notes !== '') {
                listInfoCtn.appendChild(notes);
            }


            const editCtn = document.createElement('div');
            editCtn.style.display = 'none';
            editCtn.classList.add('edit-ctn');
            listCtn.appendChild(editCtn);

            const trashSvg = document.createElement('div');
            trashSvg.classList.add('trash-svg-lists');

            const editSvg = document.createElement('div');
            editSvg.classList.add('edit-svg-lists');

            editCtn.appendChild(editSvg);
            editCtn.appendChild(trashSvg);
        });


        const listbtn = document.querySelectorAll('.lists-tab-link');
        listbtn.forEach(btn => {
            for (let i = 0; i < toDoArray.length; i += 1) {
                if (btn.getAttribute('value') === toDoArray[i].id) {
                    if (toDoArray[i].active === true) {
                        btn.style.backgroundColor = 'rgb(220, 220, 220)';
                        btn.childNodes[1].style.display = 'flex';
                    }
                }
            }
        });
    };
})

test('should return buy computer', () => {
    const toDoArray = [
        {
            active: true,
            id: "1615984821080",
            list: "Shopping",
            notes: "",
            toDos: [
                {
                    done: false,
                    dueDate: "",
                    priority: false,
                    title: "Buy Computer"
                }
            ]
        }
    ]
    const renderListContent = () => {
        const mainToDoCtn = document.getElementById('main-todo-ctn');
        mainToDoCtn.style.opacity = '1';

        while (mainToDoCtn.firstChild) {
            mainToDoCtn.removeChild(mainToDoCtn.firstChild);
        }

        const addToDoBtn = document.querySelector('.add-btn');
        addToDoBtn.style.pointerEvents = 'auto';
        addToDoBtn.style.backgroundColor = '';

        if (toDoArray.length === 0) {
            const emptyMsg = document.createElement('h3');
            emptyMsg.style.textAlign = 'center';
            emptyMsg.textContent = 'Empty here... :(';

            const emptyGuide = document.createElement('p');
            emptyGuide.style.textAlign = 'center';
            emptyGuide.textContent = 'Make a list to add a To-Do.';

            addToDoBtn.style.pointerEvents = 'none';
            addToDoBtn.style.backgroundColor = 'rgb(196, 196, 196)';

            mainToDoCtn.style.opacity = '0.3';

            mainToDoCtn.appendChild(emptyMsg);
            mainToDoCtn.appendChild(emptyGuide);
        }

        toDoArray.forEach(list => {
            list.toDos.forEach(td => {
                const toDoCtn = document.createElement('div');
                toDoCtn.classList.add('todo-ctn');
                mainToDoCtn.appendChild(toDoCtn);

                const todo = document.createElement('label');
                todo.classList.add('todo-item');
                todo.setAttribute('value', list.id);
                todo.textContent = td.title;

                expect(todo).toEqual("<label class='todo-item' value='1615984821080'>Buy Computer</label>")

                if (td.done === true) {
                    todo.style.textDecoration = 'line-through';
                    toDoCtn.style.opacity = '0.3';
                }
                toDoCtn.appendChild(todo);

                if (list.id === todo.getAttribute('value')
                    && list.active === true) {
                    toDoCtn.style.display = 'flex';
                } else {
                    return;
                }

                const todoInfoCtn = document.createElement('div');
                todoInfoCtn.classList.add('todo-info-ctn');
                toDoCtn.appendChild(todoInfoCtn);

                const date = document.createElement('label');
                date.textContent = td.dueDate;
                todoInfoCtn.appendChild(date);

                const priority = document.createElement('label');
                priority.classList.add('prio-indicator');
                if (td.priority === true) {
                    priority.textContent = '!';
                }
                todoInfoCtn.appendChild(priority);

                const trashSvg = document.createElement('div');
                trashSvg.classList.add('trash-svg-todos');
                trashSvg.style.margin = '0em';

                todoInfoCtn.appendChild(trashSvg);
            });
        });
    };
})


