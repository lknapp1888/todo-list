import './style.css';
import Todo, {todoList} from './todo-list.js';

const first = new Todo('first test title', 'dummy desc one', 'Sunday', 1, 'Project Zeus');
const second = new Todo('Second title', 'dummy desc two', 'Monday', 2, 'Brexit');
const third = new Todo('third title', 'dummy desc three', 'Tuesday', 3, 'Get new job');


console.log(todoList.list)
