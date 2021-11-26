import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atom";
import CreateToDo from "./CreateTodoList";
import ToDo from "./Todo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    // setCategory는 categories 타입을 받아야 하지만
    // ts의 option의 value는 string타입이기 때문에
    // any 타입으로 변환해준다.
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form>
        <select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
      </form>
      <CreateToDo />
      {toDos?.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </div>
  );
}
export default ToDoList;
