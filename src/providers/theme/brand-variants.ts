import { BrandVariants } from "@fluentui/react-components";
import { ThemeColorEnum } from "./theme.model";

export interface IBrandVariantList {
  name: ThemeColorEnum;
  values: BrandVariants;
}

export const BRAND_VARIANTS: IBrandVariantList[] = [
  {
    name: ThemeColorEnum.Purple,
    values: {
      10: "#050206",
      20: "#211126",
      30: "#381744",
      40: "#4B1A5E",
      50: "#5F1D78",
      60: "#741F94",
      70: "#8920B0",
      80: "#9A2EC3",
      90: "#A546C9",
      100: "#B05BCF",
      110: "#BB6FD5",
      120: "#C582DB",
      130: "#CE95E1",
      140: "#D8A8E6",
      150: "#E1BBEC",
      160: "#EACEF2",
    },
  },
  {
    name: ThemeColorEnum.LightBlue,
    values: {
      10: "#020304",
      20: "#14181B",
      30: "#1E272E",
      40: "#27333D",
      50: "#2F3F4C",
      60: "#384C5D",
      70: "#415A6D",
      80: "#4B687F",
      90: "#547690",
      100: "#5D84A2",
      110: "#6793B5",
      120: "#71A2C8",
      130: "#7BB1DB",
      140: "#85C1EE",
      150: "#9FCFF5",
      160: "#BCDCF8",
    },
  },
  {
    name: ThemeColorEnum.Green,
    values: {
      10: "#020401",
      20: "#111C0F",
      30: "#172E17",
      40: "#1C3C1C",
      50: "#204A21",
      60: "#235926",
      70: "#26682B",
      80: "#297730",
      90: "#2C8735",
      100: "#2E973A",
      110: "#45A54B",
      120: "#63B264",
      130: "#7EBF7C",
      140: "#97CB94",
      150: "#B0D8AD",
      160: "#C9E4C6",
    },
  },
  {
    name: ThemeColorEnum.Teal,
    values: {
      10: "#000503",
      20: "#041D19",
      30: "#003028",
      40: "#003E34",
      50: "#004B40",
      60: "#005A4C",
      70: "#006859",
      80: "#007766",
      90: "#008773",
      100: "#009680",
      110: "#00A68E",
      120: "#24B59C",
      130: "#44C4AB",
      140: "#64D2BA",
      150: "#85DFCA",
      160: "#A9EBDA",
    },
  },
  {
    name: ThemeColorEnum.Pink,
    values: {
      10: "#070106",
      20: "#2A0B25",
      30: "#49053D",
      40: "#61004C",
      50: "#77005A",
      60: "#8E0066",
      70: "#A50072",
      80: "#BE007D",
      90: "#D60687",
      100: "#E92890",
      110: "#F94198",
      120: "#FF61A0",
      130: "#FF80A9",
      140: "#FF9AB4",
      150: "#FFB2C2",
      160: "#FFC9D1",
    },
  },
  {
    name: ThemeColorEnum.Red,
    values: {
      10: "#050200",
      20: "#221305",
      30: "#3A1D0B",
      40: "#4F240E",
      50: "#642B10",
      60: "#7C3112",
      70: "#953615",
      80: "#AF3A18",
      90: "#CB3C1C",
      100: "#E93920",
      110: "#ED5A42",
      120: "#F4725D",
      130: "#F98978",
      140: "#FD9E91",
      150: "#FFB4AB",
      160: "#FFCAC4",
    },
  },
];

export const getCustomVariant = (
  variantName: ThemeColorEnum
): BrandVariants | undefined => {
  return BRAND_VARIANTS.find((x) => x.name === variantName)?.values;
};
