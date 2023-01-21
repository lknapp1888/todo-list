import Todo, {todoList} from './todo-list.js';
import { todoListFilters } from './filter.js';
import { format } from 'date-fns';
import { parseISO } from 'date-fns';

export const uiLoad = {
    loadPage: function (itemArray) {
        //itemArray is the default list to filter by, can be set in index.js
        this.loadItemArray(itemArray);
        this.initCompleteBtn(itemArray);
        this.initEditButton(itemArray); 
        this.initDeleteBtn(itemArray);
        this.toggleActiveFilterBtn(todoListFilters.activeFilter);
        this.loadProjects(todoList.list);
        this.initProjectFilterBtns(todoList.list);
        uiLoad.initNewItemBtn();
        this.loadHeaderText();
    },

    loadHeaderText: function () {
        const project = todoListFilters.addSpaceRemoveHyphen(todoListFilters.activeProjectFilter);
        let filter = todoListFilters.activeFilter;
        if (filter === 'sevenDay') {filter = 'next 7 days'};
        todoListFilters.a
        uiStorage.headerText.textContent = `${project} | ${filter}`
    },

    reloadPage: function() {
        const filterStatus = todoListFilters.activeFilter;
        const projectStatus = todoListFilters.activeProjectFilter;
        uiLoad.loadPage(todoListFilters.filterDateAndProject(todoList.list, projectStatus, filterStatus))
    },

    loadProjects: function (list) {
        while (uiStorage.projectNavBar.lastChild) {
            uiStorage.projectNavBar.removeChild(uiStorage.projectNavBar.lastChild);
          };

          const uniqueList = todoListFilters.getProjectArray(list);
          const heading = document.createElement('h1');
          heading.innerText = 'Projects';
          uiStorage.projectNavBar.appendChild(heading);

            for (let i = 0; i <= uniqueList.length; i++) {
                if (uniqueList[i] === '') {continue};
                const projectItem = document.createElement('button');
                projectItem.classList.add('projectBtn');
                if (i < uniqueList.length) {
                    projectItem.classList.add(`projectBtn-${todoListFilters.getProjectClassName(uniqueList[i])}`)
                    if (todoListFilters.getProjectClassName(uniqueList[i]) === todoListFilters.activeProjectFilter) {
                        projectItem.classList.add('selectedFilter');
                    }
                    projectItem.innerText = uniqueList[i];
                }
                if (i === uniqueList.length) {
                    projectItem.classList.add('projectBtn-all');
                    if (todoListFilters.activeProjectFilter === 'all') {
                        projectItem.classList.add('selectedFilter');
                    }
                    projectItem.innerText = 'ALL PROJECTS';
                }
                uiStorage.projectNavBar.appendChild(projectItem);
            };
    },

    loadItem: function (item) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('todoItem');
        itemDiv.classList.add(`todoItem-${item.referenceNum}`);
        itemDiv.innerHTML = `
        <div class="itemTopRowContainer">
            <p>${item.title}</p>
            <input type="button" id="completeBtn" value="Complete" class="completeBtnIncomplete completeBtn${item.referenceNum}">  
        </div>
        <p class="itemDescription">${item.description}</p>
        <div class="itemBottom">
            <div class="itemInfo">
                <p>${format(parseISO(item.dueDate), 'dd MMM yyyy')}<p>
                <p>${item.project}</p>
                <p>Priority: ${item.priority}</p>
            </div>
            <div class="itemBtnContainer">
                <button class="itemEditBtn editBtn${item.referenceNum}">Edit</button>
                <button class="itemDeleteBtn deleteBtn${item.referenceNum}">Delete</button>
            </div>
        </div>
        `;
        uiStorage.main.appendChild(itemDiv);
    },

    loadItemArray: function (itemArray) {
        while (uiStorage.main.lastChild) {
            uiStorage.main.removeChild(uiStorage.main.lastChild);
          }
          const newItemContainer = document.createElement('div');
          newItemContainer.id = 'newItemContainer';
          newItemContainer.classList.add('todoItem')
          newItemContainer.classList.add('todoItem-0');
          newItemContainer.classList.add('todoItem-0-active');
          const newItemBtn = document.createElement('button');
          newItemBtn.classList.add ('newItemBtn');
          newItemBtn.innerText = 'SUBMIT NEW ITEM';
          newItemContainer.appendChild(newItemBtn);
          uiStorage.main.appendChild(newItemContainer);
        for (let i = 0; i < itemArray.length; i++) {
            if (i === 0) {
                const dateTitle = document.createElement('h2');
                dateTitle.classList.add('dateSubHeading');
                dateTitle.textContent = `${format(parseISO(itemArray[i].dueDate), 'dd MMMM yyyy')}`;
                uiStorage.main.appendChild(dateTitle);
            }

            this.loadItem(itemArray[i]);
            if (itemArray[i].completionStatus) {this.markComplete(itemArray[i].referenceNum)};

            /* if statement to check date of next array item (if there is one) 
            and add new date heading if date is different */
            if ((itemArray[i + 1]) && (itemArray[i].dueDate !== itemArray[i + 1].dueDate)) {
                const dateTitleTwo = document.createElement('h2');
                dateTitleTwo.classList.add('dateSubHeading');
                dateTitleTwo.textContent = `${format(parseISO(itemArray[i + 1].dueDate), 'dd MMMM yyyy')}`;
                uiStorage.main.appendChild(dateTitleTwo);
            }
        }

    },

    editNewItem: function () {
        const todoItem = document.querySelector(`.todoItem-${0}`);
        while (todoItem.lastChild) {
            todoItem.removeChild(todoItem.lastChild);
        }
        let project = todoListFilters.activeProjectFilter;
        if (project === 'all') {project = ''};
        todoItem.innerHTML = `
        <form>
        <div class="itemTopRowContainer"> 
            <input type="text" name="title" id="title" class="itemTitle-${0}" placeholder="title" minlength="1" maxlength="100" required> 
        </div>
        <textarea name="description" id="description" cols="30" rows="6" class="itemDescription-${0}" maxlength="500"></textarea>
        <div class="itemBottom">
            <div class="itemInfo">
                <input id="testDate" type="date" class="itemDate-${0}"" required>
                <label for="priorityLevel">Priority:</label>
                <select id="priorityLevel" name="priorityLevel" class="itemPriority-${0}">
                  <option value=1>Priority 1</option>
                  <option value=2>Priority 2</option>
                  <option value=3>Priority 3</option>
                  <option value=4>Priority 4</option>
                </select>
                <input type="text" list="UIProjects" class="itemProject-${0}" value="${project}" placeholder="new or existing project" minlength="1" maxlength="50" required/>
                    <datalist id="UIProjects">
                        ${this.generateArrayOptionList(todoListFilters.getProjectArray(todoList.list))}
                    </datalist>
            </div>
            <button class="itemSubmitBtn submitBtn${0}">Submit</button>
        </div>
        </form>
        `;
        this.initSubmitNewItemButton();
    },

    editItem: function (refNum) {
        const todoItem = document.querySelector(`.todoItem-${refNum}`);
        const indexNum = todoList.getIndexNum(refNum);
        const item = todoList.list[indexNum];
        while (todoItem.lastChild) {
            todoItem.removeChild(todoItem.lastChild);
        }
        todoItem.innerHTML = `
        <form>
        <div class="itemTopRowContainer"> 
            <input type="text" name="title" id="title" class="itemTitle-${refNum}" placeholder="title" value="${item.title}" minlength="1" maxlength="100" required>  
        </div>
        <textarea name="description" id="description" cols="30" rows="6" class="itemDescription-${refNum}" maxlength="500">${item.description}</textarea>
        <div class="itemBottom">
            <div class="itemInfo">  
            <input id="testDate" type="date" class="itemDate-${refNum}" value="${item.dueDate}" required>
                <select id="priorityLevel" name="priorityLevel" class="itemPriority-${refNum}" value="${item.priority}">
                <option value=1>Priority 1</option>
                <option value=2>Priority 2</option>
                <option value=3>Priority 3</option>
                <option value=4>Priority 4</option>
                </select>
                <input type="text" list="UIProjects" class="itemProject-${refNum}" value="${item.project}" placeholder="new or existing project" minlength="1" maxlength="50" required/>
                    <datalist id="UIProjects">
                        ${this.generateArrayOptionList(todoListFilters.getProjectArray(todoList.list))}
                    </datalist>
            </div>
            <button class="itemSubmitBtn submitBtn${refNum}">Submit</button>
        </div>
        </form>
        `;
        this.initSubmitButton(refNum);
    },

    generateArrayOptionList (list) {
        let outputOptions = '';
        for (let i = 0; i < list.length; i++) {
            outputOptions+= `<option>${list[i]}</option>`
        }
        return outputOptions;
    },

    submitItem: function (refNum) {
        const title = document.querySelector(`.itemTitle-${refNum}`).value;
        const description = document.querySelector(`.itemDescription-${refNum}`).value;
        const date = document.querySelector(`.itemDate-${refNum}`).value;
        const priority = document.querySelector(`.itemPriority-${refNum}`).value;
        const project = document.querySelector(`.itemProject-${refNum}`).value;
        
        if ((title.length < 2) || (title.length > 100)) return;
        if (description.length > 500) return;
        if (date === '') return;
        if (project === '') return;
        

        if (refNum > 0) {
        const i = todoList.getIndexNum(refNum);
                todoList.list[i].title = title;
                todoList.list[i].description = description;
                todoList.list[i].dueDate = date;
                todoList.list[i].priority = priority;
                todoList.list[i].project = project;
        }

        if (refNum === 0) {
            let newItem = new Todo(title, description, date, priority, project);
        }
        this.reloadPage();
        todoList.reloadStorage();
    },

    markComplete: function(refNum) {
        const todoItem = document.querySelector(`.todoItem-${refNum}`);
        const indexNum = todoList.getIndexNum(refNum);
        const item = todoList.list[indexNum];
        todoItem.innerHTML = `
        <div class="itemTopRowContainer">
            <p><s>${item.title}</s></p>
            <input type="button" id="completeBtn" value="REOPEN" class="completeBtnComplete completeBtn${item.referenceNum}">  
        </div>
        <p><s>${item.description}</s></p>
        <div class="itemBottom">
            <div class="itemInfo">
                <p><s>${item.dueDate}</s><p>
                <p><s>${item.priority}</s></p>
                <p><s>${item.project}</s></p>
            </div>
            <div class="itemBtnContainer">
                <button class="archiveBtn archiveBtn${item.referenceNum}">Archive (not functional)</button>
                <button class="itemDeleteBtn deleteBtn${item.referenceNum}">Delete</button>
            </div>
        </div>
        `;
    },

    initHamburger: function() {
        const menuBtn = document.querySelector('.hamburger');
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('is-active');
            uiStorage.nav.classList.toggle('navHidden');
            uiStorage.container.classList.toggle('navActive')
        })
    },

    initFilterBtns: function() {
       
       //filters
        uiStorage.overdueFilterBtn.addEventListener('click', () => {
            todoListFilters.activeFilter = 'overdue';
            this.reloadPage();
        });
        uiStorage.todayFilterBtn.addEventListener('click', () => {
            todoListFilters.activeFilter = 'today';    
            this.reloadPage();
        });
        uiStorage.sevenDayFilterBtn.addEventListener('click', () => {
            todoListFilters.activeFilter = 'sevenDay';    
            this.reloadPage();
        });
        uiStorage.allBtn.addEventListener('click', () => {
            todoListFilters.activeFilter = 'all';
            this.reloadPage();
        });
    },

    initProjectFilterBtns: function(list) {
        const projects = ['all'];
        const projectArray = todoListFilters.getProjectArray(todoList.list);
        if (projectArray[0] !== '') {
            for (let i = 0; i < projectArray.length; i++) {
                projects.push(projectArray[i]);
            }
        }
        for (let i = 0; i < projects.length; i++) {
            const projectClass = todoListFilters.getProjectClassName(projects[i]);
            const projectBtn = document.querySelector(`.projectBtn-${projectClass}`);
            projectBtn.addEventListener('click', () => {
                todoListFilters.activeProjectFilter = `${projectClass}`
                console.log(`${projectClass} button is working`);
                this.toggleActiveProjectFilterBtn(projectClass);
                this.reloadPage();
            })
        }
    },

    toggleActiveProjectFilterBtn: function (projectClass) {
        const projectBtns = document.querySelectorAll('.projectBtn');
        console.log(projectBtns[0].classList[1]);
        for (let i = 0; i < projectBtns.length; i++) {
            (projectBtns[i].classList[1] === `projectBtn-${projectClass}`) ?
             projectBtns[i].classList.add('selectedFilter') : projectBtns[i].classList.remove('selectedFilter');        
        }
    },

    toggleActiveFilterBtn: function (filter) {
        if (filter === 'overdue') {
            overdueFilterBtn.classList.add('selectedFilter');
            todayFilterBtn.classList.remove('selectedFilter');
            sevenDayFilterBtn.classList.remove('selectedFilter');
            allBtn.classList.remove('selectedFilter');
        };
        if (filter === 'today') {
            overdueFilterBtn.classList.remove('selectedFilter');
            todayFilterBtn.classList.add('selectedFilter');
            sevenDayFilterBtn.classList.remove('selectedFilter');
            allBtn.classList.remove('selectedFilter');
        };
        if (filter === 'sevenDay') {
            overdueFilterBtn.classList.remove('selectedFilter');
            todayFilterBtn.classList.remove('selectedFilter');
            sevenDayFilterBtn.classList.add('selectedFilter');
            allBtn.classList.remove('selectedFilter');
        };
        if (filter === 'all') {
            overdueFilterBtn.classList.remove('selectedFilter');
            todayFilterBtn.classList.remove('selectedFilter');
            sevenDayFilterBtn.classList.remove('selectedFilter');
            allBtn.classList.add('selectedFilter');
        };
    },

    initEditButton: function (item) {
        for (let i = 0; i < item.length; i++) {
            if (item[i].completionStatus) {continue};
            const editBtn = document.querySelector(`.editBtn${item[i].referenceNum}`);
            editBtn.addEventListener('click', () => {
                this.editItem(item[i].referenceNum);
            });
        }
    },

    initCompleteBtn: function (item) {
        for (let i = 0; i < item.length; i++) {
            const completeBtn = document.querySelector(`.completeBtn${item[i].referenceNum}`);
            completeBtn.addEventListener('click', () => {
                const correctIndexNum = todoList.getIndexNum(item[i].referenceNum);
                todoList.list[correctIndexNum].completionStatus = !todoList.list[correctIndexNum].completionStatus;
                console.log(todoList.list[correctIndexNum])
                todoList.list[correctIndexNum].completionStatus ? this.markComplete(item[i].referenceNum) : this.editItem(item[i].referenceNum);
                this.initCompleteBtn([todoList.list[correctIndexNum]]);
                if (item[i].completionStatus) {this.initDeleteBtn([item[i]])};
            });
        }
    },

    initDeleteBtn: function (item) {
        for (let i = 0; i < item.length; i++) {
            const deleteBtn = document.querySelector(`.deleteBtn${item[i].referenceNum}`);
            deleteBtn.addEventListener('click', () => {
                todoList.removeFromList(item[i].referenceNum);
                this.reloadPage()
            });
        }
    },

    initSubmitButton: function (refNum) {
        const submitBtn = document.querySelector(`.submitBtn${refNum}`);
        submitBtn.addEventListener('click', () => {
            uiLoad.submitItem(refNum);
        })
    },

    initSubmitNewItemButton: function () {
        const submitBtn = document.querySelector('.submitBtn0');
        submitBtn.addEventListener('click', () => {
            this.submitItem(0);
        })
    },

    initNewItemBtn: function () {
        const newItemBtn = document.querySelector('.newItemBtn');
        newItemBtn.addEventListener('click', () => {
            this.editNewItem();
            console.log('please do not multiply')
        })
    }

}

export const uiStorage = {
    main: document.querySelector('main'),
    projectNavBar: document.querySelector('.projectNavContainer'),
    newItemContainer: document.getElementById('newItemContainer'),
    headerText: document.getElementById('headerText'),
    nav: document.querySelector('nav'),
    container: document.querySelector('.container'),

    //Buttons
    overdueFilterBtn: document.getElementById('overdueFilterBtn'),
    todayFilterBtn: document.getElementById('todayFilterBtn'),
    sevenDayFilterBtn: document.getElementById('sevenDayFilterBtn'),
    allBtn: document.getElementById('allBtn'),
    addProjectBtn: document.getElementById('addProjectBtn'),
}

