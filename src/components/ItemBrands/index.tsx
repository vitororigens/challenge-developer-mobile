import { ArrowRight, Button, Container, ContainerIcon, Content, Icon, Title } from "./styles";

interface ItemBrandsProps {
  title: string;
  onPress?: () => void;  
}

export function ItemBrands({ title, onPress }: ItemBrandsProps) { 
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
      <Button onPress={onPress}>  
        <ArrowRight name="keyboard-arrow-right" />
      </Button>
    </Container>
  );
}
