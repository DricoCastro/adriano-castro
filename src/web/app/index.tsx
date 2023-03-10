import ThemeProvider from "@mui/material/styles/ThemeProvider";
import moment from "moment-timezone";
import type { AppProps } from "next/app";
import { FC } from "react";
import { PrimaryHead } from "./components/PrimaryHead";
import { MuiTheme } from "../theme/mui";
import { GlobalStyle } from "./styles";

export const App: FC<AppProps> = ({ Component, pageProps }) => {
  moment.tz.setDefault("America/Sao_Paulo");

  return (
    <>
      <PrimaryHead />
      <GlobalStyle />
      <ThemeProvider theme={MuiTheme}>
        <div>teste</div>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};
