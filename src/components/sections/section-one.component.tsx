import {
  Avatar,
  Body1,
  Caption2,
  Rating,
  RatingOnChangeEventData,
  Title3,
  Tooltip,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { SyntheticEvent, useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  avatar: {
    display: "flex",
    ...shorthands.gap(tokens.spacingVerticalL),
  },
  avatarText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
  },
});

export const SectionOneComponent = () => {
  const styles = useStyles();
  const [ratingValue, setRatingValue] = useState<number>(3.5);
  return (
    <div className={styles.root}>
      <div className={styles.avatar}>
        <Avatar
          color="brand"
          initials="BE"
          badge={{
            status: "available",
            "aria-label": "available",
          }}
        />
        <div className={styles.avatarText}>
          Bob Evans
          <Caption2>Senior Researcher at Contoso</Caption2>
        </div>
      </div>
      <div>
        <Title3>Fluent UI 9</Title3>
        <Body1 block>
          With its modern, cohesive design system, Fluent UI 9 ensures your
          applications not only look stunning but also provide a seamless,
          intuitive user experience. It's never been easier to build responsive
          and visually appealing interfaces.
        </Body1>
      </div>
      <div>
        <Tooltip
          positioning="below"
          content={`Rating is ${ratingValue}`}
          relationship="label"
        >
          <Rating
            step={0.5}
            defaultValue={ratingValue}
            color="brand"
            onChange={(
              _: Event | SyntheticEvent<Element, Event>,
              data: RatingOnChangeEventData
            ) => setRatingValue(data.value)}
          />
        </Tooltip>
      </div>
    </div>
  );
};
