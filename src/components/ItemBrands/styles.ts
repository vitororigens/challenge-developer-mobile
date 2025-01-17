import styled from "styled-components/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity } from "react-native";
import { DefaultTheme } from "styled-components";

export const Container = styled.View`
    flex: 1;
    height: 60px;
    border-bottom-width: 2px;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_400}; 
    border-bottom-style: solid; 
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ContainerIcon = styled.View`
    height: 45px;
    width: 45px;
    border-radius: 100px;
   background-color: ${({ theme }) => theme.COLORS.GRAY_300};
   align-items: center;
   justify-content: center;
`;

export const Icon = styled(FontAwesome).attrs(({theme}: {theme: DefaultTheme}) => ({
    color: theme.COLORS.PINK_700,
    size: theme.FONTE_SIZE.XL
}))``;

export const Title = styled.Text`
    font-size: ${({theme}: {theme: DefaultTheme}) => theme.FONTE_SIZE.GG}px;
    color: ${({theme}: {theme: DefaultTheme}) => theme.COLORS.GRAY_600};
    font-family: ${({theme}: {theme: DefaultTheme}) => theme.FONT_FAMILY.REGULAR};
    
`;


export const ArrowRight = styled(MaterialIcons).attrs(({theme}: {theme: DefaultTheme}) => ({
    color: theme.COLORS.GRAY_600,
    size: theme.FONTE_SIZE.XL
}))``;

export const Content = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled(TouchableOpacity)``;