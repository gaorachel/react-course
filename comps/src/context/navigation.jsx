import React, { createContext, useEffect, useState } from "react";

const NavigationContext = createContext(null);

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    // to === '/dropdown' etc
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {/* <div>
        <button onClick={() => navigate("/home")}> go to home </button>
      </div>
      <div>
        <button onClick={() => navigate("/about")}> go to about </button>
      </div> */}
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
export { NavigationProvider };
