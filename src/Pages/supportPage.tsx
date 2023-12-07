import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SupportForm } from "./supportForm";
import { SupportSend } from "./supportSend";

export const SupportPage = () => {
  const [number, setNumber] = useState(0);
  const [page, setPage1] = useState(false);

  const randomNum = (min: any, max: any) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomNumTrig = () => {
    setNumber(randomNum(1000, 10000));
  };

  if (page === false) {
    return <SupportForm setPage1={setPage1}></SupportForm>;
  } else {
    return <SupportSend></SupportSend>;
  }
};
