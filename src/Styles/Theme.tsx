import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        body: string;
        text: string;
        white: string;
    }
}

export const LightTheme: DefaultTheme = {
    body: '#d5d5d526',
    white: '#fff',
    text: '#303A52'
};
export const DarkTheme: DefaultTheme = {
    body: '#303A52',
    text: '#fff',
    white: '#fff'
};
