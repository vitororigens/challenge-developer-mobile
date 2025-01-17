import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 20px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONTE_SIZE.GG}px;
    color: ${({theme}) => theme.COLORS.GRAY_600};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    
`;

export const Button = styled(TouchableOpacity)`
margin-right: 10px;
`;

export const Icon = styled(FontAwesome).attrs(({theme}) => ({
    color: theme.COLORS.GRAY_400,
    size: theme.FONTE_SIZE.XL
}))``;

