import { Box } from "./supportForm.style";
import { BackToCalc } from "./supportForm.style";
import { Line } from "./supportForm.style";
import { InsideBox } from "./supportForm.style";
import { Title } from "./supportForm.style";
import { InputBox } from "./supportForm.style";
import { InputName } from "./supportForm.style";
import { NameLabelBox } from "./supportForm.style";
import { EmailBox } from "./supportForm.style";
import { TopicBox } from "./supportForm.style";
import { ChooseBox } from "./supportForm.style";
import { InputDescBox } from "./supportForm.style";
import { SendBox } from "./supportForm.style";
import { SendButton } from "./supportForm.style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface SupportFormProps {
  setPage1: (page: boolean) => void;
}

export const SupportForm: React.FC<SupportFormProps> = ({ setPage1 }) => {
  const [nameFirst, setNameFirst] = useState("");
  const [nameLast, setNameLast] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [isActive, setIsActive] = useState(false);

  const nav1 = useNavigate();
  const navToCalc = () => {
    nav1("/");
  };

  function setPage() {
    if (nameFirst == "" && nameLast == "" && email == "" && problem == "") {
      return;
    }
    setPage1(true);
  }

  const handleChange = (event: any) => {
    switch (event.target.name) {
      case "nameFirst":
        setNameFirst(event.target.value);
        break;
      case "nameLast":
        setNameLast(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "chooseType":
        setProblem(event.target.value);
        break;
    }
  };

  useEffect(() => {
    setIsActive(
      nameFirst != "" && nameLast != "" && email != "" && problem != ""
    );
  });

  return (
    <body>
      <Box>
        <BackToCalc onClick={navToCalc}>Calculator</BackToCalc>
        <p
          style={{ fontSize: "2vw", display: "flex", justifyContent: "center" }}
        >
          Support Ticket Form
        </p>
        <Line></Line>
        <InsideBox id="submitBox">
          <div>
            <Title>
              <p>Name</p>
              <p style={{ color: "red" }}>*</p>
            </Title>
            <InputBox>
              <InputName
                name="nameFirst"
                onChange={handleChange}
                value={nameFirst}
              ></InputName>
              <InputName
                name="nameLast"
                onChange={handleChange}
                value={nameLast}
              ></InputName>
            </InputBox>
            <NameLabelBox>
              <p style={{ fontSize: "1vw", color: "gray" }}>First</p>
              <p style={{ fontSize: "1vw", color: "gray" }}>Last</p>
            </NameLabelBox>
            <Title>
              <p>Email</p>
              <p style={{ color: "red" }}>*</p>
            </Title>
            <InputBox>
              <EmailBox
                name="email"
                onChange={handleChange}
                value={email}
              ></EmailBox>
            </InputBox>
            <Title>
              <p>Topic</p>
              <p style={{ color: "red" }}>*</p>
            </Title>
            <TopicBox>
              <p style={{ fontSize: "1vw" }}>What can we help you today?</p>
              <ChooseBox>
                <div style={{ display: "flex", gap: "0.7vw" }}>
                  <input
                    type="radio"
                    id="general"
                    name="chooseType"
                    value="General"
                    checked={problem === "General"}
                    onChange={handleChange}
                  ></input>
                  <label htmlFor="general" style={{ fontSize: "1vw" }}>
                    General
                  </label>
                </div>
                <div style={{ display: "flex", gap: "0.7vw" }}>
                  <input
                    type="radio"
                    id="bug"
                    name="chooseType"
                    value="Bug"
                    checked={problem === "Bug"}
                    onChange={handleChange}
                  ></input>
                  <label htmlFor="bug" style={{ fontSize: "1vw" }}>
                    Bug
                  </label>
                </div>
              </ChooseBox>
            </TopicBox>
          </div>
          <div>
            <Title>
              <p>Description</p>
              <p style={{ fontSize: "0.8vw", color: "gray" }}>optional</p>
            </Title>
            <InputDescBox placeholder="Description Report"></InputDescBox>
          </div>
        </InsideBox>
        <SendBox>
          <SendButton id="sendButton" onClick={setPage} $isActive={isActive}>
            SEND
          </SendButton>
        </SendBox>
      </Box>
    </body>
  );
};
