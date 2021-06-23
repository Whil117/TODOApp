import Image from "next/image";
import React, { useCallback, useReducer, useState } from "react";
import {
  AddTodo,
  TodoCard,
  TodoMain,
  TodoChildDesc,
  TodoButton,
} from "../../styles/TodoApp/TodoReduce";
import { todoReducer } from "./TodoReducer";
import CancelIcon from "../../../public/topcoat_cancel.svg";

interface Todo {
    id: number;
  title: string;
  desc: string;
  done: boolean;
}

const initialState: any[] = [];

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [info, setInfo] = useState({
    title: "",
    desc: "",
  });

  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      title: info.title,
      desc: info.desc,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };
    dispatch(action);
  };

  const handleChange = (event:any) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div>
        <h1>TodoApp ({todos.length})</h1>
        <TodoMain>
          <AddTodo onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              value={info.title}
              placeholder="Title"
            />
            <textarea
              onChange={handleChange}
              name="desc"
              value={info.desc}
              placeholder="Description"
            ></textarea>
            <button type="submit">Add Todo</button>
          </AddTodo>
          {todos.map((todo: Todo) => (
            <TodoCard key={todo.id}>
              <div>
                <h3>{todo.title}</h3>
              </div>
              <TodoChildDesc>
                <p> {todo.desc}</p>
              </TodoChildDesc>
              <div>
                <TodoButton>
                  <Image src={CancelIcon} alt={todo.title} />
                </TodoButton>
                <button>Check</button>
              </div>
            </TodoCard>
          ))}
        </TodoMain>
      </div>
    </>
  );
};

export default Todo;
