import { css } from "styled-components";

export const COLORS = {
  biscay:"#1C3B64",
  blackPearl:"#030b16",
  royalBlue:"#3444f1",
  white: "#FFFFFF",
  black:"#010101",
  whiteOpacity35: "#FFFFFF35",
  red: "#FF0000",
  gallery: "#ECECEC",
  alabaster: "#f7f7f7",
  alabasterDark: "#F5F5F5",
  mirage: "#181924",
  gray: "#8E8E8E",
  codGray: "#0B0B0B",
};

export const DEFAULT_COLORS = {
  root: css`
    --white: ${COLORS["white"]};
    --whiteOpacity35: ${COLORS["whiteOpacity35"]};
    --black: ${COLORS["black"]};
    --red: ${COLORS["red"]};
    --gallery: ${COLORS["gallery"]};
    --alabaster: ${COLORS["alabaster"]};
    --alabasterDark: ${COLORS["alabasterDark"]};
    --mirage: ${COLORS["mirage"]};
    --gray: ${COLORS["gray"]};
    --codGray: ${COLORS["codGray"]};
    --biscay: ${COLORS["biscay"]};
    --blackPearl: ${COLORS["blackPearl"]};
    --royalBlue: ${COLORS["royalBlue"]};
    
  `,
};
