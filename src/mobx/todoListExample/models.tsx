import { action, computed, makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export class Todo {
  @observable id = uuidv4();
  @observable done = false;
  @observable text = '';

  constructor(props: Pick<Todo, 'text'> & Partial<Pick<Todo, 'done' | 'id'>>) {
    Object.assign(this, props);

    makeObservable(this);
  }

  @action
  setDone(done: boolean) {
    this.done = done;
  }

  @action
  setText(text: string) {
    this.text = text;
  }
}

export class TodoList {
  @observable
  todos: Todo[] = [];

  constructor({ todos }: Pick<TodoList, 'todos'>) {
    this.todos = todos;

    makeObservable(this);
  }

  @computed
  get pending() {
    return this.todos.filter((t) => !t.done);
  }

  @computed
  get done() {
    return this.todos.filter((t) => t.done);
  }

  @action
  add(todo: Todo) {
    this.todos.push(todo);
  }

  @action
  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index >= 0) {
      this.todos.splice(index, 1);
    }
  }
}

export function createRootStore(): TodoList {
  const rootStore = new TodoList({
    todos: [
      new Todo({ text: 'make mobx-keystone awesome!' }),
      new Todo({ text: 'spread the word' }),
      new Todo({ text: 'buy some milk', done: true }),
    ],
  });

  return rootStore;
}
