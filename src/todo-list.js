export default function Todo (title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.referenceNum = todoList.itemTicker;
    todoList.addToList(this);
    }

Todo.prototype.getDescription = function() { console.log(`The description is ${this.description}`)};
Todo.prototype.getTitle = function () { console.log(`The title is ${this.title}`);}
Todo.prototype.getDueDate = function () { console.log(`The due date is ${this.dueDate}`);}
Todo.prototype.getPriority = function () { console.log(`The priority level is ${this.priority}`);}
Todo.prototype.getProject = function () { console.log(`The project is ${this.project}`);}


export const todoList = {
    list: [],
    /* itemTicker acts as reference number for any todo item added. when the todo constructer is called
     the value is assigned as reference number, then increment by 1*/
    itemTicker: 1,
    addToList: function(item) {
        this.list.push(item);
        this.itemTicker++;
    },
    removeFromList: function(itemRefNumber) {
        for (let i = 0; i < this.list.length; i++) {
           if (this.list[i].referenceNum === itemRefNumber) {
            this.list.splice(i, 1);
           }
        }
    },

    getIndexNum: function (refNum) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].referenceNum === refNum) {
                return i;
            };
        }
    }
}
