import {createGlobalStyle} from 'styled-components';
export const lightTheme = {
    body: "#F8F9FE",
    fontColor: "#9C9FAE",
};

export const darkTheme = {
    body: "#20222F",
    fontColor: "#8A92B7",
}
export const GlobalStyles = createGlobalStyle`

    body {
        background-color:  ${(props) => props.theme.body}
    }
`;