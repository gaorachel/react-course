import React, { useEffect, useState, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef(null);

  useEffect(() => {
    const hanlder = (event) => {
      if (!divEl.current) return;
      // @ts-ignore
      if (!divEl.current.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("click", hanlder, true);

    return () => {
      document.removeEventListener("click", hanlder);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (selectedOption) => {
    setIsOpen(false);
    onChange(selectedOption);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  //   let content = "Select...";
  //   if (selection) {
  //     content = selection.label;
  //   }

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        {value?.label || "Select..."}
        <GoChevronDown className="text-xl" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
