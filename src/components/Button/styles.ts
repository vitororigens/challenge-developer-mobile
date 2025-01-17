import { ActivityIndicator, TouchableOpacity } from "react-native";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export type ButtonTypeProps = 'PRIMARY' | 'SECUNDARY';

type Props = {
    type: ButtonTypeProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    min-height: 50px;
    max-height: 50px;
    width: 100%;
    border-radius: 8px;
    background: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.PURPLE_600  : theme.COLORS.PINK_700};
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const Title = styled.Text`
    font-size: ${({theme}: {theme: DefaultTheme}) => theme.FONTE_SIZE.GG}px;
    font-family: ${({theme}: {theme: DefaultTheme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}: {theme: DefaultTheme}) =>  theme.COLORS.WHITE };
`;

export const Loading = styled(ActivityIndicator).attrs(({theme}: {theme: DefaultTheme}) => ({
    color: theme.COLORS.WHITE
}) )``