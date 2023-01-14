import { isToday } from 'date-fns';
import { parseISO } from 'date-fns';
import { isBefore } from 'date-fns';
import { isAfter } from 'date-fns';
import { subDays } from 'date-fns';
import { addDays } from 'date-fns';
import { isPast } from 'date-fns';

export const todoListFilters = {
    filterOverdue: function (list) {
        const overdue = list.filter(e => {
            return isPast(addDays(parseISO(e.dueDate), 1));
            // adding 1 day as isPast() was returning true for current day
        })
        return this.sortPriority(overdue);
    },
    
    filterToday: function (list) {
        const today = list.filter(e => {
            return isToday(parseISO(e.dueDate));
        })
        return this.sortPriority(today);
    },

    filterSevenDay: function (list) {
        const currentTime = new Date();
        const nextSevenDays = list.filter(e => {
            return ((isAfter(parseISO(e.dueDate), subDays(currentTime, 1))) 
            && (isBefore(parseISO(e.dueDate), addDays(currentTime, 6))));
        })
        return this.sortDate(this.sortPriority(nextSevenDays));
    },

    filterAll: function (list) {
        return this.sortDate(this.sortPriority(list));
    },

    filterProject: function (list, projectName) {
        const projectArray = list.filter(e => {
            return e.project === projectName;
        })
        return this.sortDate(this.sortPriority(projectArray));
    },

    sortPriority: function (list) {
        const priorityList = list.sort((a, b) => {
            return a.priority - b.priority;
          })
          return priorityList;
    },

    sortDate: function (list) {
        const dateList = list.sort((a, b) => {
            return parseISO(a.dueDate) - parseISO(b.dueDate);
        })
        return dateList;
    },

    filterUnique: function (value, index, self) {
        return self.indexOf(value) === index;
      },

    getProjectArray: function (list) {
        let projectArray = [];
        for (let i = 0; i < list.length; i++) {
            projectArray.push(list[i].project);
        }
        return projectArray.filter(todoListFilters.filterUnique).sort(function(a, b){
            let nameA = a.toLowerCase();
            let nameB = b.toLowerCase();
            if (nameA < nameB) //sort string ascending
             return -1;
            if (nameA > nameB)
             return 1;
            return 0; //default return value (no sorting)
           });
    },

    getProjectClassName: function (project) {
        let str = project;
        str = str.replace(/\s+/g, '-').toLowerCase();
        return str;
    },

    activeFilter: 'today',
    activeProjectFilter: '',
};




