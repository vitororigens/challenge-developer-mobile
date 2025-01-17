import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${({theme}: {theme: DefaultTheme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}: {theme: DefaultTheme}) => theme.FONTE_SIZE.MD}px;
    color: ${({theme}: {theme: DefaultTheme}) => theme.COLORS.GRAY_400};
`;