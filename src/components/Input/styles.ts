// styles.js
import { TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Octicons, FontAwesome5 } from '@expo/vector-icons';

export type InputTypeProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type Props = {
    type: InputTypeProps;
}

export const Container = styled.View<Props>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    max-height: 50px;
    padding: 16px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 5px;
    width: 100%;
    border-top-left-radius: ${({ type }) => type === 'PRIMARY'  ? '8px' : 0};
    border-top-right-radius: ${({ type }) => type === 'PRIMARY' ? '8px' : 0};
    border-bottom-left-radius: ${({ type }) => type === 'SECONDARY'  ? '8px' : 0};
    border-bottom-right-radius: ${({ type }) => type === 'SECONDARY' ? '8px' : 0};
`;

export const InputContainer = styled(TextInput).attrs(({ theme }) => ({
    placeholderTextColor: theme.COLORS.GRAY_400
}))`
    flex: 1;
    min-height: 60px;
    max-height: 60px;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONTE_SIZE.LG}px;
    padding: 15px;
`;

export const Button = styled(TouchableOpacity)``;

export const Icon = styled(Octicons).attrs(({ theme }) => ({
    size: theme.FONTE_SIZE.GG
}))``;

export const IconInput = styled(FontAwesome5).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_400,
    size: theme.FONTE_SIZE.LG
}))``;
