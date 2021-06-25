import React, { ChangeEventHandler, FormEventHandler,useContext } from "react";
import ThemeContext from "../assets/ThemeContext";
import { TodoAdd } from "../styles/TodoApp/TodoReduce";

interface Props {
    handleTodoSubmit:FormEventHandler<HTMLFormElement>
    handleTodoChange:ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    title:string
    desc:string
}

const TodoAddForm:React.FC<Props> = ({ handleTodoSubmit, handleTodoChange, title, desc }) => {
    const theme = useContext(ThemeContext)

  return (
    <TodoAdd onSubmit={handleTodoSubmit} theme={theme}>
      <input
        onChange={handleTodoChange}
        type="text"
        name="title"
        value={title}
        placeholder="Title"
        autoComplete="off"
      />
      <textarea
        onChange={handleTodoChange}
        name="desc"
        value={desc}
        placeholder="Description"
      ></textarea>
      <button type="submit">Add Todo</button>
    </TodoAdd>
  );
};

export default TodoAddForm;
