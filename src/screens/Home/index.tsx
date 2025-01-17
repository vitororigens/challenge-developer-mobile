import { useContext, useEffect, useState } from 'react';
import { DefaultContainer } from '../../components/DefaultContainer';
import { Container, SubTitle, Title } from './styles';
import axios from 'axios';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { ItemBrands } from '../../components/ItemBrands';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/authContext';

interface Brand {
  codigo: string;
  nome: string;
}

export function Home() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get<Brand[]>('https://parallelum.com.br/fipe/api/v1/carros/marcas')
      .then(response => {
        setBrands(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <DefaultContainer title='Home' showButtonSignOut>
      <Container>
        <Title>
          Bem vindo,
        </Title>
        <SubTitle>
          {user?.user.name}
        </SubTitle>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={brands}
            keyExtractor={(item) => item.codigo}
            renderItem={({ item }) => (
              <ItemBrands title={item.nome} onPress={() => navigation.navigate('models', { brandId: item.codigo })} />
            )}
            ListEmptyComponent={
              <Text>Não há marcas disponíveis no momento.</Text>
            }
          />
        )}
      </Container>
    </DefaultContainer>
  );
}
