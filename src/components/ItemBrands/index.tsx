import { ArrowRight, Container, ContainerIcon, Content, Icon, Title } from "./styles";

interface ItemBrandsProps {
  title: string;
}

export function ItemBrands({ title }: ItemBrandsProps) { 
  return (
    <Container>
      <Content>
        <ContainerIcon>
          <Icon name="car" />
        </ContainerIcon>
        <Title>
          {title}
        </Title>
      </Content>
      <ArrowRight name="keyboard-arrow-right" />
    </Container>
  );
}
