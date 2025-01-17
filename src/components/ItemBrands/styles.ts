import styled from "styled-components/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const Container = styled.View`
    flex: 1;
    height: 60px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    flex-direction: row;
`;

export const ContainerIcon = styled.View`
    height: 45px;
    width: 45px;
    border-radius: 100%;
   background-color: ${({ theme }) => theme.COLORS.GRAY_400};
   align-items: center;
   justify-content: center;
`;

export const Icon = styled(FontAwesome).attrs(({theme}) => ({
    color: theme.COLORS.PINK_700,
    size: theme.FONTE_SIZE.XL
}))``;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONTE_SIZE.GG}px;
    color: ${({theme}) => theme.COLORS.GRAY_600};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    
`;

export const Icon = styled(FontAwesome).attrs(({theme}) => ({
    color: theme.COLORS.PINK_700,
    size: theme.FONTE_SIZE.XL
}))``;


export const ArrowRight = styled(MaterialIcons).attrs(({theme}) => ({
    color: theme.COLORS.GRAY_600,
    size: theme.FONTE_SIZE.XL
}))``;

export const Content = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;