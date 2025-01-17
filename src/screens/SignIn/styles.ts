import { ImageBackground, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import IconImage from "../../assets/icon.png"

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: 50px;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONTE_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.GRAY_400};
`;


export const Icon = styled(ImageBackground).attrs({
    source: IconImage,
    resizeMode: "cover"
})`
    width: 100%;
    height: 200px;
    margin-bottom: 30px
`;