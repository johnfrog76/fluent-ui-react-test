import {
  Button,
  Dropdown,
  Option,
  Input,
  Tab,
  TabList,
  useId,
  makeStyles,
  SelectTabEvent,
  SelectTabData,
  tokens,
  Title3,
  Body1,
} from "@fluentui/react-components";
import { SearchRegular } from "@fluentui/react-icons";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  row2: {
    display: "flex",
    gap: "1rem",
    "> *": {
      flex: "1",
    },
  },
  tabContent: {
    padding: "1.5rem 0",
    textAlign: "center",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
});

export const SectionTwoComponent = () => {
  const styles = useStyles();
  const [currentTab, setCurrentTab] = useState<unknown>("tab1");

  const onTabSelect = (_: SelectTabEvent, data: SelectTabData) => {
    setCurrentTab(data.value);
  };

  const dropdownId = useId("dropdown-default");
  return (
    <div className={styles.root}>
      <div>
        <Title3 block>Make an Impression</Title3>
        <Body1 block>
          Make a big impression with this clean, modern, and mobile-friendly
          site. Use it to communicate information to people inside or outside
          your team. Share your ideas, results, and more in this visually
          compelling format.
        </Body1>
      </div>
      <div>
        <TabList defaultSelectedValue={currentTab} onTabSelect={onTabSelect}>
          <Tab value="tab1">Home</Tab>
          <Tab value="tab2">Pages</Tab>
          <Tab value="tab3">Documents</Tab>
        </TabList>
        <div className={styles.tabContent}>
          {currentTab === "tab1" && <div>Home tab content</div>}
          {currentTab === "tab2" && <div>Pages tab content</div>}
          {currentTab === "tab3" && <div>Documents tab content</div>}
        </div>
      </div>
      <div className={styles.row2}>
        <Dropdown aria-labelledby={dropdownId} placeholder="Select" inlinePopup>
          <Option value="Action 1">Action 1</Option>
          <Option value="Action 2">Action 2 </Option>
          <Option value="Action 3">Action 3</Option>
        </Dropdown>
      </div>
      <div className={styles.row2}>
        <Input
          placeholder="Find"
          contentAfter={
            <Button
              aria-label="Find"
              appearance="transparent"
              icon={<SearchRegular />}
              size="small"
            />
          }
        />
      </div>
    </div>
  );
};
