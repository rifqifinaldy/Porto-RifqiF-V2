import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global.style";
import { theme } from "./theme.style";

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default BasicLayout;
