import { Button } from "../../components/Button";
import { DefaultContainer } from "../../components/DefaultContainer";
import { Input } from "../../components/Input";
import {
  Container,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Text } from "react-native";

const formSchema = z.object({
  user: z.string().min(1, "Nome do usuário é obrigatorio"),
  password: z.string().min(1, "Senha é obrigatória"),
});

type FormSchemaType = z.infer<typeof formSchema>;

export function SignIn() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useContext(AuthContext);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const handleSingIn = async (data: FormSchemaType) => {
    setIsLoading(true);
    try {
      await signIn(data);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DefaultContainer title="Signin">
      <Container>
        <Controller
          control={control}
          name="user"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              type="PRIMARY"
              name="envelope"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              showIcon
              placeholder="user"
            />
          )}
        />
        {errors.user && <Text>{errors.user.message}</Text>} 
        
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              type="SECONDARY"
              name="lock"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              showIcon
              placeholder="Senha"
              passwordType
            />
          )}
        />
        {errors.password && <Text>{errors.password.message}</Text>} 

        <Button
          type="PRIMARY"
          title="Entrar"
          onPress={handleSubmit(handleSingIn)}
          isLoading={isLoading}
          disabled={isLoading}
        />
      </Container>
    </DefaultContainer>
  );
}
