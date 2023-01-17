import './style.css';
import Todo, {todoList} from './todo-list.js';
import { todoListFilters } from './filter.js';
import {uiLoad, uiStorage} from './UI';


// const first = new Todo('first test title', 'dummy desc one', '2023-01-12', 1, 'Project Zeus');
// const second = new Todo('Second title', 'dummy desc two', '2023-01-28', 2, 'Brexit');
// const third = new Todo('third title', 'dummy desc three', '2023-01-14', 1, 'Bridge construction');
// const fourth = new Todo('fourth title', 'desc 4', '2023-01-11', 1, 'Brexit');


todoList.loadListFromStorage();
// set the filter function to dictate the default starting filter
uiLoad.loadPage(todoListFilters.filterOverdue(todoList.list));
uiLoad.initFilterBtns();




