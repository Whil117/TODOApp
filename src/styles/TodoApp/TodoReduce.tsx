import styled from "@emotion/styled";

interface Check {
  check: Boolean;
}

export const TodoAdd = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 350px;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 2px 2px 15px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  input {
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
    background-color: white;
  }
  button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    background-color: #dddddd;
    &:active {
      color: white;
      background-color: dodgerblue;
    }
  }
  textarea {
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
    height: 260px;
  }
`;

export const TodoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: auto;
  justify-content: space-between;
  align-items: stretch;
  background: #ffffff;
  box-shadow: 2px 2px 15px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  h3 {
    margin: 0;
    padding: 0;
  }
`;

export const TodoMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-around;
`;

export const TodoDescDiv = styled.div`
  p {
    word-wrap: break-word;
    font-size: large;
    width: 100%;
    border: none;
    height: 100%;
    background-color: white;
  }
`;
export const TodoDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 35px;
  height: 35px;
  background: #db2a2a;
  border-radius: 5px;
  border: 1px solid #db2a2a;
`;
export const TodoCheckButton = styled.button<Check>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background-color: ${({ check }) => (check ? "#4DDB2A" : "#b4b4b4")};
  border: ${({ check }) =>
    check ? " 1px solid #4DDB2A" : "1px solid #b4b4b4"};
  svg {
    path {
      fill: ${({ check }) => (check ? "white" : "white")};
    }
  }
`;
export const TodoButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 0 0;
`;
export const TodoTitleDiv = styled.div`
  word-wrap: break-word;
  height: auto;
`;
