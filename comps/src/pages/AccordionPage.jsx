import React from "react";
import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    { id: "sdifhiosdg", label: "here is a question1", content: "this is the answer111111111." },
    { id: "osdglbsdgz", label: "here is a question2", content: "this is the answer222222222." },
    { id: "sdghpihshk", label: "here is a question3", content: "this is the answer333333333." },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
