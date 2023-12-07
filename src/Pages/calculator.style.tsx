import { styled } from "styled-components";
import { Textfit } from "react-textfit";

export const Box = styled.div`
  background-color: black;
  width: 18vw;
  height: 33vw;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 16px 15px 3px rgba(0, 0, 0, 0.4);
`;

export const Display = styled.div`
  height: 8vw;
  display: flex;
  background-color: gray;
  margin-bottom: 2vw;
  border-radius: 1rem;
  padding: 1vw;
  align-items: flex-end;
  justify-content: space-between;
`;

export const History = styled.div`
  overflow: auto;
  height: 100px;
  width: 80px;
  cursor: default;
  -ms-overflow-style: none;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar{
    display:none;
  }
`;

export const DisplayCalc = styled(Textfit)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 1.8vw;
  color: white;
`;

export const CalcBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
`

export const CalcButton = styled.button`
    cursor: pointer;
    background: #a5a5a5;
    border-radius: 50%;
    padding: 1px;
    height: 3.2vw;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2vw;
`

// export const SupportButton = styled.button`
//     background-color: #866242;
//     cursor: pointer;
//     border-radius: 50%;
//     padding: 1px;
//     height: 3.2vw;
//     border: none;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 1.2vw;
// `

// export const OpButton = styled.button`
//     background-color: orange;
//     cursor: pointer;
//     border-radius: 50%;
//     padding: 1px;
//     height: 3.2vw;
//     border: none;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 1.2vw;
// `

