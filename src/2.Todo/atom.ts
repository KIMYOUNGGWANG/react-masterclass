import { atom, selector } from "recoil";
export interface ITodo {
  text: string;
  id: number;
  category: "DONE" | "DOING" | "TO_DO";
}
export const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});
export const categoryState = atom({
  key: "category",
  default: "T",
});
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    // if (category === "TO_DO")
    //   return toDos.filter((todo) => todo.category === "TO_DO");
    // if (category === "DOING")
    //   return toDos.filter((todo) => todo.category === "DOING");
    // if (category === "DONE")
    //   return toDos.filter((todo) => todo.category === "DONE");
    return toDos.filter((todo) => todo.category === category);
  },
});
