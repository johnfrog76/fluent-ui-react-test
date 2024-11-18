import { Option, Dropdown } from "@fluentui/react-components";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../providers/theme/theme.context";
import { ThemeColorEnum } from "../../providers/theme/theme.model";

export const ThemeColorPickerComponent = () => {
  const { themeColor, setThemeColor, currentTheme } = useContext(ThemeContext);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const keys = Object.keys(ThemeColorEnum).filter(
    (x) => x !== ThemeColorEnum.None
  );
  const values = Object.values(ThemeColorEnum).filter(
    (x) => x !== ThemeColorEnum.None
  );

  const dropDownOptions: { key: string; text: string }[] = keys.map(
    (k, idx) => {
      return { key: k, text: values[idx] };
    }
  );

  const handleSelect = (key: string) => {
    if (key) {
      setThemeColor(key as ThemeColorEnum);
    }
  };

  useEffect(() => {
    const tempValue = themeColor === ThemeColorEnum.None ? "" : themeColor;
    setSelectedKey(tempValue);
  }, [themeColor, currentTheme]);

  return (
    <>
      <Dropdown
        placeholder="Select color"
        defaultValue={themeColor === ThemeColorEnum.None ? "" : themeColor}
        defaultSelectedOptions={selectedKey ? [selectedKey] : []}
      >
        {dropDownOptions.map((x) => (
          <Option key={x.key} value={x.key} onClick={() => handleSelect(x.key)}>
            {x.text}
          </Option>
        ))}
      </Dropdown>
    </>
  );
};
