import { create } from "zustand";

interface CounterType {
  counter: number;
  incrementCounter: () => void;
  clearCounter: () => void;
}

interface TodoListType {
  list: string[];
  deleteFromTheList: (deleteEntry: number) => void;
  addToTheList: (newTodoEntry: string) => void;
}

export const useCountStore = create<CounterType>((set) => ({
  counter: 0,
  incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
  clearCounter: () => set({ counter: 0 })
}));

export const useTodoListStore = create<TodoListType>((set) => ({
  list: [],
  deleteFromTheList: (deleteEntryIndex) =>
    set((state) => {
      state.list.splice(deleteEntryIndex, 1);
      return { list: [...state.list] };
    }),
  addToTheList: (newTodoEntry) =>
    set((state) => ({ list: [...state.list, newTodoEntry] }))
}));
