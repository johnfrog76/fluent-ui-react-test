export enum ThemeEnum {
  Dark = "dark",
  Light = "light",
}

export enum ThemeColorEnum {
  None = "None",
  Green = "Green",
  LightBlue = "Light Blue",
  Pink = "Pink",
  Purple = "Purple",
  Red = "Red",
  Teal = "Teal",
}

export enum ThemeText {
  Dark = "Dark Theme",
  Light = "Light Theme",
}

export type ThemeContextType = {
  currentTheme: ThemeEnum;
  themeColor: ThemeColorEnum;
  setCurrentTheme: (theme: ThemeEnum) => void;
  setThemeColor: (color: ThemeColorEnum) => void;
};
