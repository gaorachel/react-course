import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children }) {
  const { navigate } = useNavigation();

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
