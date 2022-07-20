import axios from "axios";
import UserContext from "../contexts/userContext";
import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, ThemeSettings } from "../components";

import { useStateContext } from "../contexts/ContextProvider";

const Dashboard = () => {
  const {
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      {/* <UserContext.Provider value={{ userData, setUserData }}> */}
      <div className="flex  dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 
                                hover:drop-shadow-xl
                                hover:bg-light-gray text-white"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            {/* <Sidebar /> */}
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            {/* <Sidebar /> */}
          </div>
        )}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            {/* <Navbar /> */}
          </div>

          <div>{themeSettings && <ThemeSettings />}</div>
        </div>
      </div>
      {/* </UserContext.Provider> */}
    </div>
  );
};

export default Dashboard;
