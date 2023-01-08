import { todoListFilters } from './filter.js';
import {todoList} from './todo-list.js';

export default function Project (name, description) {
    this.name = name;
    this.description = description;
}

Project.prototype.getTodoList = function () {
    return todoListFilters.filterProject(todoList.list, this.name);
}
Project.prototype.projectOverview = function () {
    return `The Project is ${this.name}.
    Project description: ${this.description}`;
}