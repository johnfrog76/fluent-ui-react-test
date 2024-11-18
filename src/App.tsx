import { makeStyles, tokens } from "@fluentui/react-components";
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";
import { ThemeColorPickerComponent } from "./components/theme-color-picker/theme-color-picker.component";

import { SectionOneComponent } from "./components/sections/section-one.component";
import { SectionTwoComponent } from "./components/sections/section-two.component";
import { SectionThreeComponent } from "./components/sections/section-three.component";
const useStyles = makeStyles({
  root: {
    border: `${tokens.strokeWidthThick} solid ${tokens.colorBrandForegroundLink}`,
    padding: "1rem",
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(3, 1fr)",
    borderRadius: tokens.borderRadiusXLarge,
    minHeight: "50vh",
  },
  topBar: {
    display: "flex",
    gap: "1rem",
    justifyContent: "flex-end",
    padding: "1rem 0",
  },
});

function App() {
  const styles = useStyles();

  return (
    <>
      <div className={styles.topBar}>
        <ThemeToggleComponent />
        <ThemeColorPickerComponent />
      </div>
      <div className={styles.root}>
        <SectionOneComponent />
        <SectionTwoComponent />
        <SectionThreeComponent />
      </div>
    </>
  );
}

export default App;
