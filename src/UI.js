import {todoList} from './todo-list.js';
import { todoListFilters } from './filter.js';

export const uiLoad = {
    loadPage: function (itemArray) {
        //itemArray is the default list to filter by, can be set in index.js
        this.initBtns();
        this.loadItemArray(itemArray);
    },

    loadItem: function (item) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('todoItem');
        itemDiv.innerHTML = `
        <p>${item.title}</p>
        <p>${item.description}</p>
        <div class="itemBottom">
            <div class="itemInfo">
                <input class="itemDateInput" data-dateInput-ref="${item.referenceNum} "type="date">
                <p>${item.priority}</p>
                <p>${item.project}</p>
            </div>
            <button class="itemEditBtn" data-editBtn-ref="${item.referenceNum}">Edit</button>
        </div>
        `;
        uiStorage.main.appendChild(itemDiv);
    },
    
    loadItemArray: function (itemArray) {
        while (uiStorage.main.lastChild) {
            uiStorage.main.removeChild(uiStorage.main.lastChild);
          }
        for (let i = 0; i < itemArray.length; i++) {
            this.loadItem(itemArray[i]);
        }
    },

    initBtns: function() {
        uiStorage.todayFilterBtn.addEventListener('click', () => {
                uiLoad.loadItemArray(todoListFilters.filterToday(todoList.list))
        });

        uiStorage.sevenDayFilterBtn.addEventListener('click', () => {
                uiLoad.loadItemArray(todoListFilters.filterSevenDay(todoList.list))
        });
        uiStorage.allBtn.addEventListener('click', () => {
            uiLoad.loadItemArray(todoListFilters.filterAll(todoList.list))
        });

    }
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

