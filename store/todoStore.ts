import create from "zustand";

type Todo = {
  text: string;
  completed: boolean;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (index: number) => void;
  editTodo: (index: number, newText: string) => void;
  deleteTodo: (index: number) => void;
};

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { text, completed: false }],
    })),
  toggleTodo: (index) =>
    set((state) => {
      const todos = [...state.todos];
      todos[index].completed = !todos[index].completed;
      return { todos };
    }),
  editTodo: (index, newText) =>
    set((state) => {
      const todos = [...state.todos];
      todos[index].text = newText;
      return { todos };
    }),
  deleteTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    })),
}));

export default useTodoStore;
