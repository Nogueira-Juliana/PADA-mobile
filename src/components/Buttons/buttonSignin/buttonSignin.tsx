import { ButtonRegisterContainer, TextButton } from "./buttonSignin-style";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../../routes/Stack/Models";

function ButtonDoctor() {
  const navigation = useNavigation<propsStack>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
      <ButtonRegisterContainer>
        <TextButton>Cadastre-se</TextButton>
      </ButtonRegisterContainer>
    </TouchableOpacity>
  );
}

export default ButtonDoctor;
