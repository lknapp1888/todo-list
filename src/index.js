import './style.css';
import Todo, {todoList} from './todo-list.js';
import { todoListFilters } from './filter.js';
import {uiLoad, uiStorage} from './UI';

todoList.loadListFromStorage();
// set the filter function to dictate the default starting filter
uiLoad.loadPage(todoListFilters.filterOverdue(todoList.list));
uiLoad.initFilterBtns();




