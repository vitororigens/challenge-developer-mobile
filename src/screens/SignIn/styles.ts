import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONTE_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.GRAY_400};
`;