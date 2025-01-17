import { useContext, useEffect, useState } from 'react';
import { DefaultContainer } from '../../components/DefaultContainer';
import { Container, SubTitle, Title } from './styles';
import axios from 'axios';
import { FlatList } from 'react-native';
import { ItemBrands } from '../../components/ItemBrands';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/authContext';

interface Brand {
  codigo: string;
  nome: string;
}

export function Home() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const { user } = useContext(AuthContext);
  console.log(user)
  const navigation = useNavigation();

  useEffect(() => {
    axios.get<Brand[]>('https://parallelum.com.br/fipe/api/v1/carros/marcas')
      .then(response => setBrands(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <DefaultContainer title='Home'>
      <Container>
        <Title>
          Bem vindo,
        </Title>
        <SubTitle>
          {user?.user.name} 
        </SubTitle>
        <FlatList
          data={brands}
          keyExtractor={(item) => item.codigo}
          renderItem={({ item }) => (
            <ItemBrands title={item.nome} onPress={() => navigation.navigate('Model', { brandId: item.codigo })} />
          )}
        />
      </Container>
    </DefaultContainer>
  );
}
