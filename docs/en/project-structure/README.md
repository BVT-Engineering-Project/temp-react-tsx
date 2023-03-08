# Project structure

```
|--src
  |--modules
    |-- index.js
  |--libs
    |-- hooks - custom hooks or you can call ti as action creators
    |   |-- index.js - export all hooks from here, you should not import hooks directly
    |   |-- src
    |       |-- auth.js
    |-- ui - ui componenjs, all components should be in this folder
    |   |-- index.js - export all components from here, you should not import components directly
    |   |-- src
    |       |-- layout.jsx
    |       |-- inpujs
    |           |-- file.jsx
    |           |-- form.jsx
    |           |-- price.jsx
    |           |-- text.jsx
    |-- utils - utils for your project
      |-- index.js
```

Any business logic should be in hooks, any ui components should be in ui folder, any models should be in models folder, any utils should be in utils folder.

## how to use

