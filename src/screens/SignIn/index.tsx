import { ScrollView } from "react-native";
import { Button } from "../../components/Button";
import { DefaultContainer } from "../../components/DefaultContainer";
import { Input } from "../../components/Input";
import {
  ButtonText,
  Container,
  ContentForgetPassword,
  Icon,
  Span,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Toast } from "react-native-toast-notifications";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Formato inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
});

type FormSchemaType = z.infer<typeof formSchema>;

export function SignIn() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, reset } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  function handleSingIn({ email, password }: FormSchemaType) {
    setIsLoading(true);
   
  }

  const onInvalid = () => {
    Toast.show("Por favor, preencha todos os campos.", { type: "danger" });
  };

  return (
    <DefaultContainer title="Signin">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <Icon />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                type="PRIMARY"
                name="envelope"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                showIcon
                placeholder="Email"
                keyboardType="email-address"
              />
            )}
          />
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
          <Button
            type="PRIMARY"
            title="Entrar"
            onPress={handleSubmit(handleSingIn, onInvalid)}
            isLoading={isLoading}
            disabled={isLoading}
          />
        </Container>
      </ScrollView>
    </DefaultContainer>
  );
}
