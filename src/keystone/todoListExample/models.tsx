import { computed } from 'mobx';
import {
  model,
  Model,
  modelAction,
  ModelAutoTypeCheckingMode,
  prop,
  registerRootStore,
  setGlobalConfig,
  tProp,
  types,
} from 'mobx-keystone';
import { v4 as uuidv4 } from 'uuid';

setGlobalConfig({
  modelAutoTypeChecking: ModelAutoTypeCheckingMode.AlwaysOn,
});

@model('todoSample/Todo')
export class Todo extends Model({
  id: prop<string>(() => uuidv4()),
  text: tProp(types.string),
  done: tProp(types.boolean, false),
}) {
  @modelAction
  setDone(done: boolean) {
    this.done = done;
  }

  @modelAction
  setText(text: string) {
    this.text = text;
  }
}

@model('todoSample/TodoList')
export class TodoList extends Model({
  todos: tProp(types.array(types.model<Todo>(Todo)), () => []),
}) {
  @computed
  get pending() {
    return this.todos.filter((t) => !t.done);
  }

  @computed
  get done() {
    return this.todos.filter((t) => t.done);
  }

  @modelAction
  add(todo: Todo) {
    this.todos.push(todo);
  }

  @modelAction
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

  registerRootStore(rootStore);

  return rootStore;
}
