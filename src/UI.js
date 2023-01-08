import {todoList} from './todo-list.js';
import { todoListFilters } from './filter.js';

export const uiLoad = {
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
        for (let i = 0; i < itemArray.length; i++) {
            this.loadItem(itemArray[i]);
        }
    },
}

export const uiStorage = {
    main: document.querySelector('main'),
    todayFilterBtn: document.getElementById('todayFilterBtn'),
}

