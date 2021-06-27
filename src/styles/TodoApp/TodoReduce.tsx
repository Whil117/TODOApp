import styled from "@emotion/styled";

interface Check {
  check: Boolean;
}
interface Theme {
  theme:string
}

export const TodoAdd = styled.form<Theme>`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 350px;
  justify-content: space-between;
  box-shadow: 2px 2px 15px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  background: ${({theme})=>theme==='light'? '#ffffff' : '#18191c'};
  input {
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    color:${({theme})=>theme==='light' ? 'black' : 'white'};
    border: 1px solid ${({theme})=>theme==='light'? '#18191c' : 'white'};
    background-color: ${({theme})=>theme==='light'? 'white' : '#40444b'};
  }
  button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    color:${({theme})=>theme==='light' ? '#18191c' : 'white'};
    background-color: ${({theme})=>theme==='light'? '#dddddd' : 'dodgerblue'};
  }
  textarea {
    border-radius: 5px;
    padding: 10px;
    height: 260px;
    margin: 5px;
    color:${({theme})=>theme==='light' ? '#18191c' : 'white'};
    border: 1px solid ${({theme})=>theme==='light'? '#18191c' : 'white'};
    background-color: ${({theme})=>theme==='light'? 'white' : '#40444b'};
  }
`;

export const TodoCard = styled.div<Theme>`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: auto;
  justify-content: space-between;
  align-items: stretch;
  box-shadow: 2px 2px 15px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  h3 {
    margin: 0;
    padding: 0;
  }
  color:${({theme})=>theme==='light' ? '#18191c' : 'white'};
  background: ${({theme})=>theme==='light'? '#ffffff' : '#18191c'};
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
