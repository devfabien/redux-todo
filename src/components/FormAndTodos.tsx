import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo";
import TodoList from "./Todolist";

export default function FormAndTodos(): ReactElement {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (input !== "" && input.trim() !== "") {
      dispatch(addTodo(input));
    }
    setInput("");
  }

  return (
    <div className="h-screen flex flex-col w-1/2 mx-auto justify-center items-center">
      <h1 className="text-gray-300 font-semibold text-5xl pb-10">Todo App</h1>
      <form
        className="bg-blue-800 p-10 shadow-2xl flex items-center rounded-md"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="todoTask"
          placeholder="Todo task..."
          value={input}
          onChange={handleChange}
          className="outline-none py-3 px-6 mx-3 text-gray-800"
        />
        <button className="mx-4 text-lg bg-gray-500 p-3 rounded-full hover:bg-gray-400 hover:font-semibold text-gray-100">
          Add
        </button>
      </form>
      <TodoList />
    </div>
  );
}
