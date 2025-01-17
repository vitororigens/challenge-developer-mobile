import { Button, Container, Content, ContentHeader, Icon, Title } from "./styles";

type PropsDefaultContainer = {
    children?: React.ReactNode;
    title?: string;
    showButtonBack?: boolean;
    showButtonSignOut?: boolean;
}

export function DefaultContainer({ children, showButtonBack, showButtonSignOut, title }: PropsDefaultContainer) {
    return (
        <Container>
            <ContentHeader>
                <Title>
                    {title}
                </Title>

                {showButtonBack &&
                    <Button>
                        <Icon
                            name='arrow-left'
                        />
                    </Button>
                }

                {showButtonSignOut &&
                    <Button>
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