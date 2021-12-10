import ToDoList from "./components/TodoList";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          {/* droppable의 children은 함수형식이어야 한다 */}
          <Droppable droppableId="1">
            {(provide) => (
              <ul ref={provide.innerRef} {...provide.droppableProps}>
                <Draggable draggableId="first" index={0}>
                  {(provide) => (
                    <li ref={provide.innerRef} {...provide.draggableProps}>
                      <span {...provide.dragHandleProps}>☝</span>
                      one
                    </li>
                  )}
                </Draggable>
                <Draggable draggableId="second" index={1}>
                  {(provide) => (
                    <li ref={provide.innerRef} {...provide.draggableProps}>
                      <span {...provide.dragHandleProps}>☝</span>
                      two
                    </li>
                  )}
                </Draggable>
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
