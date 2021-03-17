test('Should return undefined', () => {
    let toDoArray = [];
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
    expect(renderLists()).toBeUndefined();
})
