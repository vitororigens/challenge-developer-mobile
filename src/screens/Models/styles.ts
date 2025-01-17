import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: ${({theme}: {theme: DefaultTheme}) => theme.FONTE_SIZE.GG}px;
    color: ${({theme}: {theme: DefaultTheme}) => theme.COLORS.GRAY_600};
    font-family: ${({theme}: {theme: DefaultTheme}) => theme.FONT_FAMILY.BOLD};
    
`;

export const SubTitle = styled.Text`
    font-size: ${({theme}: {theme: DefaultTheme}) => theme.FONTE_SIZE.GG}px;
    color: ${({theme}: {theme: DefaultTheme}) => theme.COLORS.PURPLE_600};
    font-family: ${({theme}: {theme: DefaultTheme}) => theme.FONT_FAMILY.BOLD};
    margin-left: 20px;
    margin-bottom: 20px;
    
`;