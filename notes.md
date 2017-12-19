# Redux

## What's the problem with distant components in React?

Sharing data/state to distant components is cumbersome and error-prone. Sometimes parent components must track data that they don't even care about, for the sake of their children.

## What is Redux? Why/when do we use it?

Redux provides a store of data to our application, where we can share data among distant components. We use Redux only when it's less painful than using React state.

## What are the steps to add Redux to a React app?

Part 1 - Read
  A. Create store
  B. Hook up <Provider> in index.js (around <App>)
  C. Use connect() to connect to store from components that need data
Part 2 - Write
  A. Create reducer(s) with actions and action creators
  B. Dispatch actions with dispatch (recommend to use mapDispatchToProps)

## What is a store?

A store is a collection of data that is used by any components that want its data.

## What is a reducer? What does the reducer do for us in Redux?

A reducer is a function. It takes as its parameters state and an action, and returns a modified copy of state. This is the only way to modify state in Redux.

## What is immutability? Why do we use it?

Data is considered immutable when functions that use the data don't mutate it but insteadreturn a modified copy. Because the data is a reference (to an object or array), we'll trivially be able to tell that the data has changed, without needing to dig through the object to see what exactly changed. This is useful in React to know if a component should re-render, or doesn't need to bother.

## Vocab

* action: a plain object. All actions must have a type, but the payload is optional.
* action creator: a function that creates actions for us. For developer convenience. Help us keep code DRY.
* dispatch: we send actions to the store using dispatch.