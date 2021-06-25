import Image from "next/image";
import React, { useEffect, useReducer, FC, useState } from "react";
import { todoReducer } from "./TodoReducer";
import useForm from "../../hooks/useForm";
import {
  TodoAdd,
  TodoCard,
  TodoMain,
  TodoTitleDiv,
  TodoDescDiv,
  TodoButtonsDiv,
  TodoDeleteButton,
  TodoCheckButton,
  
} from "../../styles/TodoApp/TodoReduce";
import CancelIcon from "../../../public/topcoat_cancel.svg";
import todoCheck from "../../../public/bi_check-lg.svg";
import styled from "@emotion/styled";

const TodoWarning = styled.h2`
  color: red;
`;
interface Todo {
  id: number;
  title: string;
  desc: string;
  done: boolean;
}

const todoLocal = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("todos") || "[]");
  }
};

const Todo: FC = () => {
  const [todoValid, setTodoValid] = useState(false);
  const [todos, dispatch] = useReducer(todoReducer, [], todoLocal);
  const [{ title, desc }, handleTodoChange, handleTodoReset] = useForm({
    title: "",
    desc: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleTodoCheck = (id: number) => {
    dispatch({
      type: "check",
      payload: id,
    });
  };
  const handleTodoDelete = (id: number) => {
    const action = {
      type: "delete",
      payload: id,
    };
    dispatch(action);
  };

  const handleTodoSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();

    if (title === "" || desc === "") {
      setTodoValid(true);
    } else {
      setTodoValid(false);
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
      handleTodoReset();
    }
  };

  return (
    <>
      <div>
        <h1>TodoApp ({todos?.length})</h1>
        {todoValid && <TodoWarning>Debes llenar el Formulario</TodoWarning>}
        <TodoMain>
          <TodoAdd onSubmit={handleTodoSubmit}>
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
          {todos
            ? todos.map((todo: Todo) => (
                <TodoCard key={todo.id}>
                  <TodoTitleDiv>
                    <h3>{todo.title}</h3>
                  </TodoTitleDiv>
                  <TodoDescDiv>
                    <p>{todo.desc}</p>
                  </TodoDescDiv>
                  <TodoButtonsDiv>
                    <TodoDeleteButton onClick={() => handleTodoDelete(todo.id)}>
                      <Image src={CancelIcon} alt={todo.title} />
                    </TodoDeleteButton>
                    <TodoCheckButton
                      check={todo.done}
                      onClick={() => handleTodoCheck(todo.id)}
                    >
                      <svg
                        width="23"
                        height="25"
                        viewBox="0 0 23 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M19.3846 2.23602C19.7785 1.80393 20.3137 1.55886 20.8732 1.55438C21.4328 1.5499 21.9713 1.78637 22.3709 2.21211C22.7706 2.63785 22.9989 3.21824 23.0061 3.82643C23.0133 4.43463 22.7986 5.02118 22.4091 5.45789L11.1391 20.772C10.9455 20.9985 10.7119 21.1804 10.4522 21.3066C10.1925 21.4329 9.91204 21.501 9.62759 21.5068C9.34315 21.5126 9.06054 21.4561 8.79664 21.3406C8.53274 21.2251 8.29297 21.0529 8.09163 20.8345L0.619505 12.7157C0.222434 12.2839 -0.000561977 11.6983 -0.000427185 11.0878C-0.000292393 10.4773 0.222962 9.89184 0.620224 9.46024C1.01748 9.02864 1.55621 8.78625 2.11789 8.7864C2.67957 8.78655 3.21818 9.02921 3.61526 9.46102L9.52482 15.886L19.3286 2.30789C19.3464 2.28319 19.3656 2.2597 19.3861 2.23758L19.3846 2.23602Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="23" height="25" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </TodoCheckButton>
                  </TodoButtonsDiv>
                </TodoCard>
              ))
            : false}
        </TodoMain>
      </div>
    </>
  );
};

export default Todo;
