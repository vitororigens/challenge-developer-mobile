import { Container, ContainerIcon, Content, Icon, Title } from "./styles";

interface ItemBrandsProps {
  title: string;
}

export function ItemModels({ title}: ItemBrandsProps) { 
  return (
    <Container >
      <Content>
        <ContainerIcon>
          <Icon name="car" />
        </ContainerIcon>
        <Title>
          {title}
        </Title>
      </Content>
    </Container>
  );
}
