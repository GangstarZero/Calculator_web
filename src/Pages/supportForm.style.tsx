import { styled } from "styled-components";

export const Box = styled.div`
  border: 1px white solid;
  width: 48vw;
  height: 33vw;
  background-color: black;
  border-radius: 20px;
`;
export const BackToCalc = styled.button`
  border: none;
  margin-left: 2vw;
  margin-top: 0.8vw;
  height: 1.9vw;
  width: 6vw;
  border-radius: 2vw;
  cursor: pointer;
`;

export const Line = styled.hr`
  margin-left: 2vw;
  margin-right: 2vw;
  margin-bottom: 1.5vw;
`;

export const InsideBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 2vw;
  font-size: 2vw;
`;

export const InputBox = styled.div`
  margin-left: 2vw;
  display: flex;
  gap: 1vw;
`;
export const InputName = styled.input`
  height: 1.5vw;
  background-color: black;
  border: 1px white solid;
  border-radius: 0.2vw;
  &:hover{
    border-color: orange;
  }
`;

export const NameLabelBox = styled.div`
  display: flex;
  margin-left: 2vw;
  gap: 9.8vw;
`;

export const EmailBox = styled.input`
  height: 1.5vw;
  background-color: black;
  border: 1px white solid;
  border-radius: 0.2vw;
  width: 22.3vw;
  margin-bottom: 0.7vw;
  &:hover{
    border-color: orange;
  }
`;

export const TopicBox = styled.div`
  border: 1px white solid;
  height: 8vw;
  width: 22.3vw;
  margin-left: 2vw;
  padding: 1vw;
  border-style: dashed;
`;

export const ChooseBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.4vw;
`;

export const InputDescBox = styled.textarea`
  margin-left: 2vw;
  border: 1px white solid;
  height: 19vw;
  width: 20vw;
  background-color: black;
  padding: 0.5vw;
  resize: none;
  &:hover{
    border-color: orange;
  }
`;

export const SendBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2vw;
  margin-top: 0.5vw;
`;

export const SendButton = styled.button<{ $isActive: boolean; }>`
  height: 1.8vw;
  width: 4vw;
  border-radius: 1vw;
  border: none;
  background-color: ${props=> props.$isActive? "orange" : "gray"};
`;
