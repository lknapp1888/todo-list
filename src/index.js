import './style.css';
import Todo, {todoList} from './todo-list.js';
import { todoListFilters } from './filter.js';
import {uiLoad, uiStorage} from './UI';
import Project from './projects';

const first = new Todo('first test title', 'dummy desc one', '2023-01-06', 3, 'Project Zeus');
const second = new Todo('Second title', 'dummy desc two', '2023-01-14', 2, 'Brexit');
const third = new Todo('third title', 'dummy desc three', '2023-09-24', 1, 'Brexit');

const brexit = new Project('Brexit', 'This is a project for Britain to leave the EU');

console.log(uiLoad.loadItemArray(todoListFilters.filterPriority(todoList.list)))

// console.log(brexit.getTodoList())
// console.log(todoList.list);
// console.log(todoListFilters.filterProject(todoList.list, 'Brexit'));

