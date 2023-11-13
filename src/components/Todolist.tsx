import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo } from "../redux/todo";

export default function TodoList(): ReactElement {
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
    .filter((task, index) => index > 0)
    .map((task) => (
      <div className="flex justify-between w-full items-center" key={task.id}>
        <input
          type="checkbox"
          onChange={() => dispatch(completedTodo(task.id))}
        />
        <h3 className={`${task.isCompleted ? "line-through" : ""}`}>
          {task.text}
        </h3>
        <button
          className="bg-red-400 hover:bg-red-500 text-white rounded-full py-1 px-3"
          onClick={() => dispatch(deleteTodo(task.id))}
        >
          X
        </button>
      </div>
    ));
  return <div className="flex flex-col gap-5 w-1/2 py-3">{todoTasks}</div>;
}
