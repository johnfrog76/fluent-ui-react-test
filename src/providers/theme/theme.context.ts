import { createContext } from "react";
import { ThemeColorEnum, ThemeContextType, ThemeEnum } from "./theme.model";

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: ThemeEnum.Dark,
  setCurrentTheme: () => {},
  themeColor: ThemeColorEnum.None,
  setThemeColor: () => {},
});
