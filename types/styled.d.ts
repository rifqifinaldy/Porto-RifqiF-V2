import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      blue: string;
      red: string;
      orange: string;
      purple: string;
      text: {
        primary: string;
        secondary: string;
      };
    };
    shadow: {
      inner_shadow: string;
      outer_shadow: string;
    };
    margin: {
      none: string;
      s: string;
      m: string;
      l: string;
    };
    font : {
      weight : {
        light : number,
        normal : number,
        bold : number,
        extraBold: number,
      }
    },
    opacity : {
      none : number,
      light : number,
      medium : number,
      hard : number,
    }
  }
}

export type BaseColors = "blue" | "red" | "orange" | "purple";
export type TextColors = "primary" | "secondary";
export type FontWeight = "normal" | "light" | "bold" | "extraBold";

export type Margin = "none" | "s" | "m" | "l";
