# todo-list

live preview of the site is available [here](https://lknapp1888.github.io/todo-list/)

## Project aims

The aim of this project was to build a front-end todo application using only HTML, CSS and JavaScript. I wanted this to feature:
- completion deadlines
- option to complete todo items
- priority levels
- user creatable todo categories
- Filtering by date and project

I also set out with this project to not reference any online resources or guides relating specifically to building a todo application (I did still consult online resources on a more micro level - e.g. for syntax, CSS, JavaScript methods etc.). This was because at this stage of my learning I wanted to improve my problem solving abilities without simply replicating existing solutions and to cement my existing knowledge/understanding of JavaScript/web development.

## Outcomes

- Spending time at length on certain problems or difficulties in the application without relying on googling certainly helps with future appreciation of certain solutions, technologies, libraries etc. This gave me an appreciation and understanding of the difficulties REACT can solve, for instance.
- Improved understanding/ability with JavaScript conditional rendering of HTML.
- Improved generalised understanding of JavaScript.
- Exposure to new solutions, functions and methods to solve specific problems.
- Increased understanding of the need to follow SOLID principles and have a clear application flow

## Challenges

Without using a library such as REACT I had to manage my own state and UI rendering for the CRUD operations in the application. The CRUD functions for the todo list are in the todo-list.js file. They utilise local storage. The main file however is the UI.js as this contains the various initialisation functions (e.g. to initialise buttons, menu hamburger), page load and reload functions and UI storage.

Having user created project categories for each todo added an additional difficulty layer as it meant that the project filtering had to be dynamic (as opposed to date only filtering which only has four non-adjustable options), and how to enable simultaneous project and date filtering.

## Potential improvements

- Utilise a unique ID rather than relying on a ticker for todo reference number
- Utilise SOLID principles to improve functions and have clearer application flow.
- Improve design/UI
- More commenting within the application