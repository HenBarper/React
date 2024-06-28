# Learning React

## Sections
<a name="Sections"></a>
1. [What is React?](#whatIsReact)
2. [Creating a React App](#creatingAReactApp)
3. [Understanding Our React App](#understandingOurReactApp)
4. [State](#state)
5. [Props](#props)
6. [Notes](#notes)

[Sources](#sources)<br>
[Credits](#credits)<br>
__________________________________________________________________________________________________________________________________________
<a name="whatIsReact"></a>
## What is React?
- React is a javascript based frontend framework.
- The idea of React is to break up your code into different components that you combine together to make your application.
- React uses a markup syntax called JSX.
  - React components are javascript functions.
- React components recieve data and return what should appear on screen.
  - You can pass them new data in response to an interaction, like when a user types into an input.
  - React will then update the screen to match the new data.
- You don't have to build your whole page/application in react. You can add React to an existing html project.
- React is a library that lets you put components together.
  - It doesn’t prescribe how to do routing and data fetching.
  - To build an entire app with Reactyou'll need a full-stack React framework
    -  Next.js or Remix for example
- React can be used to build web or native apps.

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="creatingAReactApp"></a>
## Creating a React App
- In the terminal run `npm install vite@latest`
- You'll need to install create-vite if you don't already have it.
- For project name use `.` to use your current directory/repo
- Choose the React framework and Javascript + SWC
- Run `npm i` to get your dependencies
- Run `npm run dev` to run your newly created App.

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="understandingOurReactApp"></a>
## Understanding Our React App
- The index.html and src/main.jsx are hooking up to one another
- Our src/App.jsx has a function that is being exported as our React App
  - A function inside React that starts with a capital letter is essentially a component.
     - A component is a function that returns jsx code.

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="state"></a>

## State
- State is immutable and cannot be changed.
- Import UseState
  - `import { useState } from "react"`
- Create State Objects
  - `const [newItem, setNewItem] = useState("")`
  - `const [todos, setTodos] = useState([])`

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="props"></a>

## Props
- Props can be passed when initializing a component
  - `<NewTodoForm onSubmit={addTodo} />`
  - `<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />`
- Accept props in the component declaration
  - `export function NewTodoForm({ onSubmit }) {...}`
  - `export function NewTodoForm({ props }) {...}`
  - Then call use/call them
    - `onSubmit();`
    - `props.onSubmit();`

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="notes"></a>

## Notes
- class is a reserved word in javascript so when using html tags we should use `className` instead.
  - `<form className="name_here"></form>`
- for is also a reserved word in javascript so use `htmlFor` instead
  - `<label htmlFor="item">New Item</label>`
- Components in React can only return one element.
  - You can get around this by fragmenting.
    - Surround your elements with `<>components_here</>`
- Anytime you put something in curly brackets `{code}` it will be run as javascript code.
- If you're returning an array of elements inside of React, each element at the top level needs to have a `key` property.
- Without the arrow function indicator in this code `onClick={() => deleteTodo(todo.id)}` the onClick will recieve the return value of the function call.
- `UseState()` & `useEffect()`are hooks.
  - Hooks must be called at the top of the function
    - They cannot be called conditionally

## Further research
- Short cicuiting

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="sources"></a>
## Sources
[react.dev](https://react.dev/)<br>
[react.dev/learn](https://react.dev/learn)<br>
[Learn React With This One Project by Web Dev Simplified](https://www.youtube.com/watch?v=Rh3tobg7hEo)<br>

### React + Vite
- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
- Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="credits"></a>
### Contributor: Ben Harper
Website: [BenHarperWebDev](https://henbarper.github.io/benharperwebdev/)
LinkedIn: [linkedin.com/in/ben-harper-webdev](https://www.linkedin.com/in/ben-harper-webdev/)

[Back to top](#Sections)
