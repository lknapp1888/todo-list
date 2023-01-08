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
        return today;
    },

    filterSevenDay: function (list) {
        const currentTime = new Date();
        const nextSevenDays = list.filter(e => {
            return ((isAfter(parseISO(e.dueDate), subDays(currentTime, 1))) 
            && (isBefore(parseISO(e.dueDate), addDays(currentTime, 6))));
        })
        return nextSevenDays;
    },

    filterPriority: function (list) {
        return list.sort((a, b) => {
            return a.priority- b.priority;
          });
    },

    filterProject: function (list, projectName) {
        const projectArray = list.filter(e => {
            return e.project === projectName;
        })
        return projectArray;
    },
};




