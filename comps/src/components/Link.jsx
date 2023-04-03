import React, { useContext } from "react";
import NavigationContext from "../context/navigation";
import classNames from "classnames";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const classes = classNames("text-blue-500");

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    } // if the user holds command key on mac or control key on windows, then dont do the below part - this will create a new tab.9
    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
