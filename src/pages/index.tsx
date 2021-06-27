import React, { useEffect, useState,FC } from "react";
import ThemeContext, { Themes } from "../assets/ThemeContext";
import Todo from "../components/TodoApp/Todo";
import styled from "@emotion/styled";
interface Theme {
  theme: string;
}

const MainApp = styled.main<Theme>`
  font-family: "Source Sans Pro", sans-serif;
  background: ${({theme})=>theme==='light'? '#ffffff' : '#18191c'};
  height: 100vh;
  h1 {
    color: ${({ theme }) => (theme === "light" ? "#2f3136" : "white")};
    margin: 0;
  }
`;

const Home:FC = () => {
  const [theme, setTheme] = useState(Themes.light);
  
  const handleTodoTheme = (nameTheme: string) => {
     setTheme(nameTheme);
  };

  useEffect(() => {
    const themeLocal = localStorage.getItem("themew") || "light";
    setTheme(themeLocal);
  }, []);

  useEffect(() => {
    localStorage.setItem("themew", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <MainApp theme={theme}>
        <Todo handleTodoTheme={handleTodoTheme}  />
      </MainApp>
    </ThemeContext.Provider>
  );
};
export default Home;
