import { DEFAULT_COLORS } from "@/colors/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        ${DEFAULT_COLORS.root}
    }
`;