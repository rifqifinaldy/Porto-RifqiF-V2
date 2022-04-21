import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    shadow: {
      inner_shadow: string;
      outer_shadow: string;
    };
  }
}
