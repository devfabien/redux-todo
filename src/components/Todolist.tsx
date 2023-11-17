import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo, editTodo } from "../redux/todo";

export default function TodoList({
  newText,
}: {
  newText: string;
}): ReactElement {
  const dispatch = useDispatch();
  const tasks = useSelector(
    (state: {
      todo: {
        value: {
          id: string;
          text: string;
          isCompleted: boolean;
        }[];
      };
    }) => state.todo.value
  );
  const todoTasks = tasks
    .filter((_, index) => index > 0)
    .map((task) => (
      <div className="flex justify-between w-full items-center" key={task.id}>
        <input
          type="checkbox"
          onChange={() => dispatch(completedTodo({ id: task.id }))}
        />
        <h3 className={`${task.isCompleted ? "line-through" : ""}`}>
          {task.text}
        </h3>
        <div className="flex gap-x-4">
          <button
            className="bg-green-400 hover:bg-green-500 text-white rounded-full py-1 px-3"
            onClick={() => dispatch(editTodo({ id: task.id, text: newText }))}
          >
            edit
          </button>
          <button
            className="bg-red-400 hover:bg-red-500 text-white rounded-full py-1 px-3"
            onClick={() => dispatch(deleteTodo({ id: task.id }))}
          >
            delete
          </button>
        </div>
      </div>
    ));
  return <div className="flex flex-col gap-5 w-1/2 py-3">{todoTasks}</div>;
}
