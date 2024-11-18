import {
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  Slider,
  SliderOnChangeData,
  Switch,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { ChevronRightRegular } from "@fluentui/react-icons";
import { ChangeEvent, useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  rows: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    "> *": {
      flex: "1",
    },
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  sliderValue: {
    textAlign: "center",
    fontSize: "1.5em",
    paddingBottom: "2rem",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
});

export const SectionThreeComponent = () => {
  const [sliderValue, setSliderValue] = useState<number>(20);
  const styles = useStyles();
  const handleChange = (
    _: ChangeEvent<HTMLInputElement>,
    data: SliderOnChangeData
  ) => {
    setSliderValue(data.value);
  };
  return (
    <div className={styles.root}>
      <div className={styles.rows}>
        <Button appearance="primary">Sign Up</Button>
        <Button
          appearance="transparent"
          icon={<ChevronRightRegular />}
          iconPosition="after"
        >
          Learn More
        </Button>
      </div>
      <div className={styles.rows}>
        <Slider value={sliderValue} onChange={handleChange} />
      </div>
      <div className={styles.rows}>
        <div className={styles.sliderValue}>{sliderValue}%</div>
      </div>
      <div className={styles.rows}>
        <div className={styles.controls}>
          <Switch defaultChecked={true} label="On" />
          <Switch label="Off" />
        </div>
        <div className={styles.controls}>
          <Checkbox defaultChecked={true} label="Option 1" />
          <Checkbox label="Option 2" />
        </div>
        <div className={styles.controls}>
          <RadioGroup>
            <Radio defaultChecked={true} label="Option 1" />
            <Radio label="Option 2" />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
