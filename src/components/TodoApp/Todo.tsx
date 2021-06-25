import Image from "next/image";
import React, { useEffect, useReducer, FC, useState } from "react";
import {
  AddTodo,
  TodoCard,
  TodoMain,
  TodoChildDesc,
  TodoButton,
} from "../../styles/TodoApp/TodoReduce";
import { todoReducer } from "./TodoReducer";
import CancelIcon from "../../../public/topcoat_cancel.svg";
import useForm from "../../hooks/useForm";
import styled from "@emotion/styled";

const Warning = styled.h2`
      color: red;
`
interface Todo {
  id: number;
  title: string;
  desc: string;
  done: boolean;
}

const TodoData = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("todos") || '[]') ;
  }
};

const Todo: FC = () => {

  const [validTodo, setValidTodo] = useState(false);
  const [todos, dispatch] = useReducer(todoReducer, [], TodoData);
  const [{title,desc}, handleChange, reset] = useForm({
    title: "",
    desc: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id: number) => {
    const action = {
      type: "delete",
      payload: id,
    };
    dispatch(action);
  };

  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    if (title === "" || desc === "") {
      setValidTodo(true)
    } else {
      setValidTodo(false)
      const newTodo = {
        id: new Date().getTime(),
        title: title,
        desc: desc,
        done: false,
      };

      const action = {
        type: "add",
        payload: newTodo,
      };
      dispatch(action);
      reset();
    }
  };

  return (
    <>
      <div>
        <h1>TodoApp ({todos?.length})</h1>
        {validTodo && <Warning>Debes llenar el Formulario</Warning>}
        <TodoMain>
          <AddTodo onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              value={title}
              placeholder="Title"
              autoComplete="off"
            />
            <textarea
              onChange={handleChange}
              name="desc"
              value={desc}
              placeholder="Description"
            ></textarea>
            <button type="submit">Add Todo</button>
          </AddTodo>
          {todos &&
            todos.map((todo: Todo) => (
              <TodoCard key={todo.id}>
                <div>
                  <h3>{todo.title}</h3>
                </div>
                <TodoChildDesc>
                  <textarea disabled >{todo.desc}</textarea>
                </TodoChildDesc>
                <div>
                  <TodoButton onClick={() => handleDelete(todo.id)}>
                    <Image src={CancelIcon} alt={todo.title} />
                  </TodoButton>
                  {/* <button>Check</button> */}
                </div>
              </TodoCard>
            ))}
        </TodoMain>
      </div>
    </>
  );
};

export default Todo;
