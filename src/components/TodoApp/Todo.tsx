import React, { useEffect, useReducer, FC, useState, useContext } from "react";
import useForm from "../../hooks/useForm";
import { todoReducer } from "./TodoReducer";
import { TodoMain } from "../../styles/TodoApp/TodoReduce";
import TodoAddForm from "../TodoAddForm";
import TodoCardComponent from "./TodoCardComponent";
import ThemeButton from "../ThemeButton/ThemeButton";
import ThemeContext from "../../assets/ThemeContext";
import styled from "@emotion/styled";
interface Todo {
  id: number;
  title: string;
  desc: string;
  done: boolean;
}
interface TodoComp {
  handleTodoTheme: any;
}
const TodoWarning = styled.h2`
  color: red;
`;
const TodoNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
`;
const TodoDivs = styled.div`
  background: ${({ theme }) => (theme === "light" ? "#ffffff" : "#18191c")};
`;

const todoLocal = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("todos") || "[]");
  }
};

const Todo: FC<TodoComp> = ({ handleTodoTheme }) => {
  const [todoValid, setTodoValid] = useState(false);
  const [todos, dispatch] = useReducer(todoReducer, [], todoLocal);
  const [{ title, desc }, handleTodoChange, handleTodoReset] = useForm({
    title: "",
    desc: "",
  });
  const theme = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleTodoCheck = (id: number) => {
    const action = {
      type: "check",
      payload: id,
    };
    dispatch(action);
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
    <TodoDivs theme={theme}>
      <TodoNav>
        <h1>TodoApp ({todos?.length})</h1>
        <ThemeButton handleTodoTheme={handleTodoTheme} />
      </TodoNav>
      {todoValid && <TodoWarning>Debes llenar el Formulario</TodoWarning>}
      <TodoMain>
        <TodoAddForm
          handleTodoSubmit={handleTodoSubmit}
          handleTodoChange={handleTodoChange}
          title={title}
          desc={desc}
        />
        {todos?.map((todo: Todo) => (
          <TodoCardComponent
            key={todo.id}
            todo={todo}
            handleTodoCheck={handleTodoCheck}
            handleTodoDelete={handleTodoDelete}
          />
        ))}
      </TodoMain>
    </TodoDivs>
  );
};

export default Todo;
