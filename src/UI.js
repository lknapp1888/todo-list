import Todo, {todoList} from './todo-list.js';
import { todoListFilters } from './filter.js';

export const uiLoad = {
    loadPage: function (itemArray) {
        //itemArray is the default list to filter by, can be set in index.js
        this.loadItemArray(itemArray);
        this.initCompleteBtn(itemArray);
        this.initEditButton(itemArray); 
        this.initDeleteBtn(itemArray);
        this.toggleActiveFilterBtn(todoListFilters.activeFilter);
        this.loadProjects(todoList.list);
        uiLoad.initNewItemBtn();
    },

    reloadPage: function() {
        const filterStatus = todoListFilters.activeFilter;
        if (filterStatus === 'today') {uiLoad.loadPage(todoListFilters.filterToday(todoList.list))};
        if (filterStatus === 'sevenDay') {uiLoad.loadPage(todoListFilters.filterSevenDay(todoList.list))};
        if (filterStatus === 'all') {uiLoad.loadPage(todoListFilters.filterAll(todoList.list))}; 
        if (filterStatus === 'overdue') {uiLoad.loadPage(todoListFilters.filterOverdue(todoList.list))};   
    },

    loadProjects: function (list) {
        while (uiStorage.projectNavBar.lastChild) {
            uiStorage.projectNavBar.removeChild(uiStorage.projectNavBar.lastChild);
          };

          const uniqueList = todoListFilters.getProjectArray(list);
          console.log('hello')

          const heading = document.createElement('h1');
          heading.innerText = 'Projects';
          uiStorage.projectNavBar.appendChild(heading);

            for (let i = 0; i < uniqueList.length; i++) {
                if (uniqueList[i] === '') {continue};
                const projectItem = document.createElement('button');
                projectItem.classList.add('projectBtn');
                projectItem.classList.add(`projectBtn-${todoListFilters.getProjectClassName(uniqueList[i])}`)
                projectItem.innerText = uniqueList[i];
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
            <input type="button" id="completeBtn" value="COMPLETE TASK" class="completeBtnIncomplete completeBtn${item.referenceNum}">  
        </div>
        <p>${item.description}</p>
        <div class="itemBottom">
            <div class="itemInfo">
                <p>${item.dueDate}<p>
                <p>${item.priority}</p>
                <p>${item.project}</p>
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
          const newItemBtn = document.createElement('button');
          newItemBtn.classList.add ('newItemBtn');
          newItemBtn.innerText = 'SUBMIT NEW ITEM';
          newItemContainer.appendChild(newItemBtn);
          uiStorage.main.appendChild(newItemContainer);
        for (let i = 0; i < itemArray.length; i++) {
            if (i === 0) {
                const dateTitle = document.createElement('h2');
                dateTitle.classList.add('dateSubHeading');
                dateTitle.textContent = `${itemArray[i].dueDate}`;
                uiStorage.main.appendChild(dateTitle);
            }

            this.loadItem(itemArray[i]);
            if (itemArray[i].completionStatus) {this.markComplete(itemArray[i].referenceNum)};

            /* if statement to check date of next array item (if there is one) 
            and add new date heading if date is different */
            if ((itemArray[i + 1]) && (itemArray[i].dueDate !== itemArray[i + 1].dueDate)) {
                const dateTitleTwo = document.createElement('h2');
                dateTitleTwo.classList.add('dateSubHeading');
                dateTitleTwo.textContent = `${itemArray[i + 1].dueDate}`;
                uiStorage.main.appendChild(dateTitleTwo);
            }
        }
    },

    editNewItem: function () {
        const todoItem = document.querySelector(`.todoItem-${0}`);
        while (todoItem.lastChild) {
            todoItem.removeChild(todoItem.lastChild);
        }
        todoItem.innerHTML = `
        <div class="itemTopRowContainer"> 
            <input type="text" name="title" id="title" class="itemTitle-${0}" placeholder="title">">
            <input type="button" id="completeBtn" value="COMPLETE TASK" class="completeBtnIncomplete completeBtn${0}">  
        </div>
        <textarea name="description" id="description" cols="30" rows="6" class="itemDescription-${0}"></textarea>
        <div class="itemBottom">
            <div class="itemInfo">
                <input id="testDate" type="date" class="itemDate-${0}"">
                <label for="priorityLevel">Priority:</label>
                <select id="priorityLevel" name="priorityLevel" class="itemPriority-${0}">
                  <option value=1>1</option>
                  <option value=2>2</option>
                  <option value=3>3</option>
                  <option value=4>4</option>
                </select>
                <label for="UIProjects">Project:</label>
                <input type="text" list="UIProjects" class="itemProject-${0}"/>
                    <datalist id="UIProjects">
                        ${this.generateArrayOptionList(todoListFilters.getProjectArray(todoList.list))}
                    </datalist>
            </div>
            <button class="itemSubmitBtn submitBtn${0}">Submit</button>
        </div>
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
        <div class="itemTopRowContainer"> 
            <input type="text" name="title" id="title" class="itemTitle-${refNum}" placeholder="title" value="${item.title}">
            <input type="button" id="completeBtn" value="COMPLETE TASK" class="completeBtnIncomplete completeBtn${refNum}">  
        </div>
        <textarea name="description" id="description" cols="30" rows="6" class="itemDescription-${refNum}">${item.description}</textarea>
        <div class="itemBottom">
            <div class="itemInfo">  
            <input id="testDate" type="date" class="itemDate-${refNum}" value="${item.dueDate}">
                <label for="priorityLevel">Priority:</label>
                <select id="priorityLevel" name="priorityLevel" class="itemPriority-${refNum}" value="${item.priority}">
                  <option value=1>1</option>
                  <option value=2>2</option>
                  <option value=3>3</option>
                  <option value=4>4</option>
                </select>
                <label for="UIProjects">Project:</label>
                <input type="text" list="UIProjects" class="itemProject-${refNum}" value="${item.project}"/>
                    <datalist id="UIProjects">
                        ${this.generateArrayOptionList(todoListFilters.getProjectArray(todoList.list))}
                    </datalist>
            </div>
            <button class="itemSubmitBtn submitBtn${refNum}">Submit</button>
        </div>
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

    //Buttons
    overdueFilterBtn: document.getElementById('overdueFilterBtn'),
    todayFilterBtn: document.getElementById('todayFilterBtn'),
    sevenDayFilterBtn: document.getElementById('sevenDayFilterBtn'),
    allBtn: document.getElementById('allBtn'),
    projectFilterBtn: document.getElementById('projectFilterBtn'),
    addProjectBtn: document.getElementById('addProjectBtn'),
}

