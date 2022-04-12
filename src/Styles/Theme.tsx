import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        body: string;
        text: string;
        white: string;
        shadow: string;
        borderColor: string;
    }
}

export const LightTheme: DefaultTheme = {
    body: '#F9FBFB',
    white: '#fff',
    text: '#303A52',
    shadow:'0px 7px 26px rgb(154 154 204 / 10%)',
    borderColor: '#ededf5'
};
export const DarkTheme: DefaultTheme = {
    body: '#303A52',
    text: '#fff',
    white: '#fff',
    shadow:'0px 7px 26px rgb(154 154 204 / 10%)',
    borderColor: '#ededf5'
};
