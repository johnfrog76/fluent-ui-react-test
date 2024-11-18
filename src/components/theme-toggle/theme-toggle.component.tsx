import { useContext } from "react";
import { Button, makeStyles } from "@fluentui/react-components";
import { ThemeContext } from "../../providers/theme/theme.context";
import { ThemeEnum, ThemeText } from "../../providers/theme/theme.model";
import {
  WeatherMoon24Regular,
  WeatherSunny24Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  btn: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.25rem",
  },
});

export const ThemeToggleComponent = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const styles = useStyles();

  const handleClick = () => {
    const temp =
      currentTheme === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark;
    setCurrentTheme(temp);
  };

  const getContents = () => {
    if (currentTheme === ThemeEnum.Light) {
      return (
        <>
          <WeatherMoon24Regular />
          <span>{ThemeText.Dark}</span>
        </>
      );
    }
    return (
      <>
        <WeatherSunny24Regular />
        <span>{ThemeText.Light}</span>
      </>
    );
  };

  return (
    <div>
      <Button size="large" onClick={() => handleClick()} className={styles.btn}>
        {getContents()}
      </Button>
    </div>
  );
};
