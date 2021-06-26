import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Todo from "../components/TodoApp/Todo";
import ThemeContext, { Themes } from "../assets/ThemeContext";

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

const Home = () => {
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
