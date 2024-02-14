# Basic Todo App API

## What is it?

- An API only (no frontend) with CRUD functionality for managing a todo list
- Built using Node + Express using TypeScript
- Built as part of Maximilian Schwarzmüller's Understanding TypeScript course on Udemy
- The primary purpose of the project is to explore how TypeScript works with Node and Express

## Usage

- NOTE: todos are held in an array on the server, so they will be lost on server restart

- clone the repo
- install deps
- run `tsc -w`
- run `npm start`
- interact with the API using the included Postman collection file `Node+TypeScript Simple Todos.postman_collection.json`
  - import it into Postman
- in Postman
  - create new todos with `Post data`
  - get all todos with `Get data`
  - edit/update a todo with `Update data`
  - delete a todo with `Delete data`
- the `req.body` to create/update a todo:

```js
{
	"text": "This is a new todo that I must do too"
}
```

- to delete or update a todo, include its `id` in the url, ie as a `req.param`

```js
{{base_url}}/todos/0.08982533963159312
// http://localhost:3000/todos/:id
// IDs are Math.random().toString()
```
