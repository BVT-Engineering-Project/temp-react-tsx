# Project structure

```
|-- libs
    |-- hooks - custom hooks or you can call ti as action creators
    |   |-- index.ts - export all hooks from here, you should not import hooks directly
    |   |-- src
    |       |-- auth.ts
    |-- models - models for response data or request data
    |   |-- index.ts - export all models from here, you should not import models directly
    |   |-- src
    |       |-- auth.interface.ts - naming the file with .interface.ts
    |-- ui - ui components, all components should be in this folder
    |   |-- index.ts - export all components from here, you should not import components directly
    |   |-- src
    |       |-- layout.tsx
    |       |-- inputs
    |           |-- file.tsx
    |           |-- form.tsx
    |           |-- price.tsx
    |           |-- text.tsx
    |-- utils - utils for your project
        |-- index.ts
|-- pages - pages for your project we use nextjs routing [nextjs routing](https://nextjs.org/docs/routing/introduction)
    |-- index.tsx
```

Any business logic should be in hooks, any ui components should be in ui folder, any models should be in models folder, any utils should be in utils folder.

## how to use

