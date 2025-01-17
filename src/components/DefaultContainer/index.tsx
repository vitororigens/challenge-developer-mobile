import { useContext } from "react";
import { Button, Container, Content, ContentHeader, Icon, Title } from "./styles";
import { AuthContext } from "../../contexts/authContext";
import { useNavigation } from "@react-navigation/native";

type PropsDefaultContainer = {
    children?: React.ReactNode;
    title?: string;
    showButtonBack?: boolean;
    showButtonSignOut?: boolean;
}

export function DefaultContainer({ children, showButtonBack, showButtonSignOut, title }: PropsDefaultContainer) {
      const { signOut } = useContext(AuthContext);
      const navigation = useNavigation()

      const goBack = () =>  {
        navigation.goBack()
      }
    return (
        <Container>
            <ContentHeader>
            {showButtonBack &&
                    <Button onPress={goBack}>
                        <Icon
                            name='arrow-left'
                        />
                    </Button>
                }
                <Title>
                    {title}
                </Title>
                {showButtonSignOut &&
                    <Button  onPress={signOut}>
                        <Icon
                            name="sign-out"
                        />
                    </Button>
                }
            </ContentHeader>
            <Content>
                {children}
            </Content>
        </Container>
    )
}