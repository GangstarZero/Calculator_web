import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SupportForm } from "./supportForm";
import { SupportSend } from "./supportSend";

export const SupportPage = () => {
  const [page, setPage1] = useState(false);

  if (page === false) {
    return <SupportForm setPage1={setPage1}></SupportForm>;
  } else {
    return <SupportSend></SupportSend>;
  }
};
