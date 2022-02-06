import "styled-components";

declare module "styled-components" {
  // export interface DefaultTheme {
  //   textColor: string;
  //   bgColor: string;
  //   accentColor: string;
  //   cardBgColor: string;
  // }
  export interface DefaultTheme {
    bgColor: string;
    cardColor: string;
    borderColor: string;
    accentColor: string;
    cardBgColor: string;
    textColor: string;
  }
}
