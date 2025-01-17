import { ArrowRight, Container, ContainerIcon, Content, Icon, Title } from "./styles";

interface ItemBrandsProps {
  title: string;
  onPress?: () => void;  
}

export function ItemBrands({ title, onPress }: ItemBrandsProps) { 
  return (
    <Container onPress={onPress}>
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
