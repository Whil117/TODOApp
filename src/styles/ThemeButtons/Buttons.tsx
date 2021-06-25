import styled from "@emotion/styled";

interface Theme {
  theme: Boolean;
}
export const LabelsMode = styled.label<Theme>`
  display: ${({ theme }) => (theme  ? "none" : "flex")};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  background-color: #ffffff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  transition: 0.3s;
  transform: scale(1.2, 1.2);
`;

export const DivLabels = styled.div<Theme>`
  display: flex;
  justify-content: ${({ theme }) =>
    theme  ? "flex-start" : "flex-end"};
  width: 73px;
  height: 35px;
  background: #c9c9c9;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
input{
    display: none;
}
`;
