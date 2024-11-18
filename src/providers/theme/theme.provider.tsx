import {
  FluentProvider,
  Theme,
  webDarkTheme,
  webLightTheme,
  createDarkTheme,
  createLightTheme,
} from "@fluentui/react-components";

import React, { useState, FC, useEffect } from "react";
import { ThemeColorEnum, ThemeEnum } from "./theme.model";
import { ThemeContext } from "./theme.context";
import { getCustomVariant } from "./brand-variants";

interface Props {
  children?: React.ReactNode;
}

export const MyTheme: FC<Props> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(ThemeEnum.Dark);
  const [usedTheme, setUsedTheme] = useState<Theme>(webLightTheme);
  const [themeColor, setThemeColor] = useState<ThemeColorEnum>(
    ThemeColorEnum.None
  );
  const themeVariant = getCustomVariant(themeColor);

  useEffect(() => {
    if (themeVariant) {
      const tempTheme =
        currentTheme === ThemeEnum.Dark
          ? createDarkTheme(themeVariant)
          : createLightTheme(themeVariant);
      setUsedTheme(tempTheme);
    } else {
      const tempTheme =
        currentTheme == ThemeEnum.Dark ? webDarkTheme : webLightTheme;
      setUsedTheme(tempTheme);
    }
  }, [currentTheme, themeVariant]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeColor,
        setCurrentTheme,
        setThemeColor,
      }}
    >
      <FluentProvider theme={usedTheme}>{children}</FluentProvider>
    </ThemeContext.Provider>
  );
};
