import {createGlobalStyle} from 'styled-components';
export const lightTheme = {
    body: "hsl(0, 0%, 100%)",
    fontColor: "hsl(228, 34%, 66%)",
};

export const darkTheme = {
    body: "hsl(230, 17%, 14%)",
    fontColor: "hsl(228, 12%, 44%)",
}
export const GlobalStyles = createGlobalStyle`

    body {
        background-color:  ${(props) => props.theme.body}
    }
`;