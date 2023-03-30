import React from "react";
import Button from "./Button";
import { GoBell, GoCheck } from "react-icons/go";
import { GoCloudDownload } from "react-icons/go";
import { FiAlertTriangle } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

function App() {
  const handleClick = () => {
    console.log(`button clicked`);
  };

  return (
    <div>
      <div>
        <Button primary onClick={handleClick} className="mb-5">
          <GoBell />
          primary
        </Button>
      </div>
      <div>
        <Button secondary rounded onClick={handleClick}>
          <GoCloudDownload />
          secondary
        </Button>
      </div>
      <div>
        <Button success outline rounded onClick={handleClick} className="mt-10">
          <GoCheck /> success
        </Button>
      </div>
      <div>
        <Button warning onClick={handleClick} className="mr-10">
          <FiAlertTriangle /> warning
        </Button>
      </div>
      <div>
        <Button danger onClick={handleClick} className="ml-10">
          <AiOutlineCloseCircle /> danger
        </Button>
      </div>
    </div>
  );
}

export default App;
