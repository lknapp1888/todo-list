import './style.css';
import Todo, {todoList} from './todo-list.js';
import { todoListFilters } from './filter.js';
import { itemDate, testBtn } from './UI';

const first = new Todo('first test title', 'dummy desc one', '2023-01-06', 3, 'Project Zeus');
const second = new Todo('Second title', 'dummy desc two', '2023-01-14', 2, 'Brexit');
const third = new Todo('third title', 'dummy desc three', '2023-09-24', 1, 'Get new job');

console.log(todoList.list);
console.log(todoListFilters.filterProject(todoList.list, 'Brexit'));



testBtn.addEventListener('click', () => {
    console.log(itemDate.value)
})

