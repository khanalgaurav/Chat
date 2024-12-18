import React from "react";
import { useThemeStore } from "../store/themeStore";
import { Themes } from "../constants/themes";

type Props = {};

const SettingsPage = (props: Props) => {
  const { theme, setTheme } = useThemeStore();
  return (
    <div>
      <div className="flex flex-col gap-5 items-center h-[44rem]">
        <h1>Themes:</h1>
        <p>Select the theme of your choice</p>
        <div className="flex gap-4 bg-base-100">
          {Themes.map((t) => (
            <button className="" onClick={() => setTheme(t)} key={t}>
              <div className="">
                <div
                  className="flex rounded-lg p-2 border border-white"
                  data-theme={t}
                >
                  <div className="bg-primary size-5 rounded"></div>
                  <div className="bg-secondary size-5 rounded"></div>
                  <div className="bg-accent size-5 rounded"></div>
                  <div className="bg-neutral size-5 rounded"></div>
                </div>
                <span>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
