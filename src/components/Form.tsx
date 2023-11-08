export default function Form() {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-blue-800 p-10 shadow-2xl rounded-md">
        <h1 className="text-gray-100 font-semibold text-3xl pb-10">Todo App</h1>
        <input
          type="text"
          name="todoTask"
          placeholder="Todo task..."
          className="outline-none py-3 px-6 mx-3 text-gray-800"
        />
        <button className="mx-4 text-lg bg-gray-500 p-3 rounded-full hover:bg-gray-400 hover:font-semibold text-gray-100">
          Add
        </button>
      </form>
    </div>
  );
}
