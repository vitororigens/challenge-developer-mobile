import { useEffect, useState } from 'react';
import { DefaultContainer } from '../../components/DefaultContainer';
import { Container } from './styles';
import axios from 'axios';
import { FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ItemModels } from '../../components/ItemModels';

interface Model {
  codigo: string;
  nome: string;
}

export function Models() {
  const route = useRoute();
  const { brandId } = route.params as { brandId?: string };
  const [models, setModels] = useState<Model[]>([]);

  useEffect(() => {
    axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`)
      .then(response => setModels(response.data.modelos))
      .catch(error => console.error(error));
  }, [brandId]);

  return (
    <DefaultContainer title='Modelos' showButtonBack>
      <Container>
        <FlatList
          data={models}
          keyExtractor={(item) => item.codigo}
          renderItem={({ item }) => (
            <ItemModels title={item.nome} />
          )}
        />
      </Container>
    </DefaultContainer>
  );
}
