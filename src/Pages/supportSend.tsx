import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "./supportForm.style";
import { BackToCalc } from "./supportForm.style";
import { Line } from "./supportForm.style";
import { TicketDesc } from "./supportSend.style";
import { DescText } from "./supportSend.style";
import { DescTicket } from "./supportSend.style";

export const SupportSend = () => {
  const [number, setNumber] = useState(0);

  const nav1 = useNavigate();
  const navToCalc = () => {
    nav1("/");
  };

  const randomNum = (min: any, max: any) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomNumTrig = () => {
    setNumber(randomNum(1000, 10000));
  };

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
        <TicketDesc>
          <DescText>
            Thank you for sending us your report, we will
          </DescText>
          <DescText className="DescText">track your problem now</DescText>
          <DescTicket>
            ticket number: <span style={{color:"white"}}>{number}</span>
          </DescTicket>
        </TicketDesc>
      </Box>
    </body>
  );
};
