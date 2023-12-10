/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  taskArray = []

  add = (task) => {
    this.taskArray.push(task)
  }

  remove = (index) => {
    if (index >= 0 && index < this.taskArray.length) {
      this.taskArray.splice(index, 1)
    }
  }

  update = (index, task) => {
    if (index >= 0 && index < this.taskArray.length) {
      this.taskArray[index] = task
    }
  }

  getAll = () => {
    return this.taskArray
  }

  get = (index) => {
    if (index < 0 || index >= this.taskArray.length) {
      return null
    }
    return this.taskArray[index]
  }

  clear = () => {
    this.taskArray = []
  }
}

module.exports = Todo;
