import styled from "@emotion/styled";

export const AddTodo = styled.form`
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
    border: 1px solid dodgerblue;
    padding: 5px;
    background-color: white;
  }
  button {
    border: 1px solid dodgerblue;
    padding: 5px;
    background-color: white;
    &:hover {
      color: white;
      background-color: dodgerblue;
    }
  }
  textarea {
    border: 1px solid dodgerblue;
    padding: 5px;
    height: 260px;
  }
`;

export const TodoCard = styled.div`
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
  h3{
      margin: 0;
      padding: 0;
  }
`;

export const TodoMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const TodoChildDesc = styled.div`
    height: 272px;
    /* border: 1px solid black; */
`
export const  TodoButton = styled.div`
display: flex;

justify-content: center;
align-items: center;
padding: 5px;
    width: 35px;
height: 35px;
background: #DB2A2A;
border-radius: 5px;
`