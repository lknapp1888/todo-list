import {todoList} from './todo-list.js';
import { todoListFilters } from './filter.js';

export const uiLoad = {
    loadPage: function (itemArray) {
        //itemArray is the default list to filter by, can be set in index.js
        this.loadItemArray(itemArray);
        this.initFilterBtns();
        this.initEditButton(itemArray); 
    },

    loadItem: function (item) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('todoItem');
        itemDiv.classList.add(`todoItem-${item.referenceNum}`);
        itemDiv.innerHTML = `
        <p>${item.title}</p>
        <p>${item.description}</p>
        <div class="itemBottom">
            <div class="itemInfo">
                <p>${item.dueDate}<p>
                <p>${item.priority}</p>
                <p>${item.project}</p>
            </div>
            <button class="itemEditBtn editBtn${item.referenceNum}">Edit</button>
        </div>
        `;
        uiStorage.main.appendChild(itemDiv);
    },

    loadItemArray: function (itemArray) {
        while (uiStorage.main.lastChild) {
            uiStorage.main.removeChild(uiStorage.main.lastChild);
          }
        for (let i = 0; i < itemArray.length; i++) {
           
            if (i === 0) {
                const dateTitle = document.createElement('h2');
                dateTitle.classList.add('dateSubHeading');
                dateTitle.textContent = `${itemArray[i].dueDate}`;
                uiStorage.main.appendChild(dateTitle);
            }
            
            this.loadItem(itemArray[i]);

            /* if statement to check date of next array item (if there is one) 
            and add new date heading if date is different */
            if ((itemArray[i + 1]) && (itemArray[i].dueDate !== itemArray[i + 1].dueDate)) {
                const dateTitleTwo = document.createElement('h2');
                dateTitleTwo.classList.add('dateSubHeading');
                dateTitleTwo.textContent = `${itemArray[i + 1].dueDate}`;
                uiStorage.main.appendChild(dateTitleTwo);
            }
        }
        this.initEditButton(itemArray); 
    },

    editItem: function (refNum) {
        const todoItem = document.querySelector(`.todoItem-${refNum}`);
        const indexNum = todoList.getIndexNum(refNum);
        const item = todoList.list[indexNum];
        while (todoItem.lastChild) {
            todoItem.removeChild(todoItem.lastChild);
        }
        todoItem.innerHTML = `
        <input type="text" name="title" id="title" class="itemTitle-${refNum}" placeholder="title" value="${item.title}">
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
                    <option>Proj</option>
                    <option>project</option>
                    <option>project 2</option>
                    <option>fake project</option>
                    </datalist>
            </div>
            <button class="itemSubmitBtn submitBtn${refNum}">Submit</button>
        </div>
        `;
        this.initSubmitButton(refNum);
    },

    submitItem: function (refNum) {
        const title = document.querySelector(`.itemTitle-${refNum}`).value;
        const description = document.querySelector(`.itemDescription-${refNum}`).value;
        const date = document.querySelector(`.itemDate-${refNum}`).value;
        const priority = document.querySelector(`.itemPriority-${refNum}`).value;
        const project = document.querySelector(`.itemProject-${refNum}`).value;

        const i = todoList.getIndexNum(refNum);
                todoList.list[i].title = title;
                todoList.list[i].description = description;
                todoList.list[i].dueDate = date;
                todoList.list[i].priority = priority;
                todoList.list[i].project = project;
                console.log(todoList.list[i]);
    },

    initFilterBtns: function() {
       
       //filters
        uiStorage.todayFilterBtn.addEventListener('click', () => {
                uiLoad.loadItemArray(todoListFilters.filterToday(todoList.list))
        });
        uiStorage.sevenDayFilterBtn.addEventListener('click', () => {
                uiLoad.loadItemArray(todoListFilters.filterSevenDay(todoList.list))
        });
        uiStorage.allBtn.addEventListener('click', () => {
            uiLoad.loadItemArray(todoListFilters.filterAll(todoList.list));

        });
    },

    initEditButton: function (item) {
        for (let i = 0; i < item.length; i++) {
            const editBtn = document.querySelector(`.editBtn${item[i].referenceNum}`);
            editBtn.addEventListener('click', () => {

                this.editItem(item[i].referenceNum);
            });
        }
    },

    initSubmitButton: function (refNum) {
        const submitBtn = document.querySelector(`.submitBtn${refNum}`);
        submitBtn.addEventListener('click', () => {
            uiLoad.submitItem(refNum);
        })
    },

}

export const uiStorage = {
    main: document.querySelector('main'),

    //Buttons
    overdueFilterBtn: document.getElementById('overdueFilterBtn'),
    todayFilterBtn: document.getElementById('todayFilterBtn'),
    sevenDayFilterBtn: document.getElementById('sevenDayFilterBtn'),
    allBtn: document.getElementById('allBtn'),
    projectFilterBtn: document.getElementById('projectFilterBtn'),
    addProjectBtn: document.getElementById('addProjectBtn'),
}

