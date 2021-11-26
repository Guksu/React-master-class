import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

// selector는 state를 변화시키는게 아니고 output을 가져오는거다
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((todo) => todo.category === "TO_DO"),
      toDos.filter((todo) => todo.category === "DOING"),
      toDos.filter((todo) => todo.category === "DONE"),
    ];
  },
});
