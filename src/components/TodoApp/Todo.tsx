import React, { useEffect, useReducer, FC, useState } from "react";
import { todoReducer } from "./TodoReducer";
import useForm from "../../hooks/useForm";
import { TodoMain } from "../../styles/TodoApp/TodoReduce";
import TodoAddForm from "../TodoAddForm";
import TodoCardComponent from "../TodoApp/TodoCard";
import ThemeButton from "../ThemeButton/ThemeButton";
import styled from "@emotion/styled";

const TodoWarning = styled.h2`
  color: red;
`;
const TodoNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 30px;
`
interface Todo {
  id: number;
  title: string;
  desc: string;
  done: boolean;
}
interface TodoComp {
  handleTodoTheme: any;
  theme: string;
}

const todoLocal = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("todos") || "[]");
  }
};

const Todo: FC<TodoComp> = ({ handleTodoTheme, theme }) => {
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
    <div>
      <TodoNav>
        <h1>TodoApp ({todos?.length})</h1>
        <ThemeButton theme={theme} handleTodoTheme={handleTodoTheme} />
      </TodoNav>
      {todoValid && <TodoWarning>Debes llenar el Formulario</TodoWarning>}
      <TodoMain>
        <TodoAddForm
          handleTodoSubmit={handleTodoSubmit}
          handleTodoChange={handleTodoChange}
          title={title}
          desc={desc}
        />
        {todos
          ? todos.map((todo: Todo) => (
              <TodoCardComponent
                key={todo.id}
                todo={todo}
                handleTodoCheck={handleTodoCheck}
                handleTodoDelete={handleTodoDelete}
              />
            ))
          : false}
      </TodoMain>
    </div>
  );
};

export default Todo;
