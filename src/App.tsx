import ToDoList from "./components/TodoList";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useState } from "react";

// useMemo는 prop이 변경될 경우만 랜더링을 하게 해준다.
// 따라서 dragDrop을 사용할 시 따로 분리하여 export default React.memo(함수명)을 사용하여
// 바뀌는 부분만 랜더링을 하는것이 좋다.
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]); 이런 방식으로도 사용 가능하다

function App() {
  const [ex, setEx] = useState(["one", "two", "three", "four", "five"]);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;

    setEx((ex) => {
      const copyEx = [...ex];
      copyEx.splice(source.index, 1);
      copyEx.splice(destination?.index, 0, draggableId);
      return copyEx;
    });
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          {/* droppable의 children은 함수형식이어야 한다 */}
          <Droppable droppableId="one">
            {(provide) => (
              // ref는 react코드를 이용해 HTML 요소를 지정하고 가져오는 방법이다
              <ul ref={provide.innerRef} {...provide.droppableProps}>
                {ex.map((toDo, index) => (
                  // dragable에서 key와 id는 같아야한다
                  <Draggable key={toDo} draggableId={toDo} index={index}>
                    {(provide) => (
                      <li ref={provide.innerRef} {...provide.draggableProps}>
                        <span {...provide.dragHandleProps}>☝</span>
                        {toDo}
                      </li>
                    )}
                  </Draggable>
                ))}
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      <ToDoList />
    </>
  );
}
export default App;
