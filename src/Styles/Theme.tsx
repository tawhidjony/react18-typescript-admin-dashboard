import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
      body: string;
      text: string;
    }
  }

export const LightTheme:DefaultTheme  = {
    body: "#fcfcfc",
    text: "#303A52"
};
export const DarkTheme:DefaultTheme  = {
    body: "#303A52",
    text: "#fff"
};


  