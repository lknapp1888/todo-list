import { isToday } from 'date-fns';
import { parseISO } from 'date-fns';
import { isBefore } from 'date-fns';
import { isAfter } from 'date-fns';
import { subDays } from 'date-fns';
import { addDays } from 'date-fns';

export const todoListFilters = {
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
    }
};




