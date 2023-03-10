import { css } from "styled-components";

export const COLORS = {
  biscay:"#1C3B64",
  white: "#FFFFFF",
  whiteOpacity35: "#FFFFFF35",
  black: "#000000",
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
    --scooter: ${COLORS["biscay"]};
    
  `,
};
