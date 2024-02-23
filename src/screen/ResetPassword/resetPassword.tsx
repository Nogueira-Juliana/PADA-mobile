import React, { useState } from "react";
import {
  ButtonNext,
  ContainerEnviaremos,
  ImageIconResetLogo,
  TextEnviaremos,
  TextEnviaremos1,
  TextReset,
  ContainerFooterBottom,
} from "./resetPassword-style";
import logo from "../../assets/logo/logo.png";

import Header from "../../components/Headers/header/header";
import FooterCurto from "../../components/Footers/footer/footer";
import { useNavigation } from "@react-navigation/native";
import { ContainerSafe, ImageIconLogo, Scroll } from "../login/login-style";
import { MainScreenContainer } from "../homeScreen/homeScreen-style";
import InputGeral from "../../components/Forms/inputGeral/inputGeral";
import { TextButton } from "../Signin/signin-style";
import { propsStack } from "../../routes/Stack/Models";
import { Platform } from "react-native";

const ResetPassword = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <MainScreenContainer>
          <Header back={true} />
          <ImageIconResetLogo source={logo} />
          <TextReset>Redefinir senha</TextReset>
          <ContainerEnviaremos>
            <TextEnviaremos>Enviaremos um código de 6 dígitos </TextEnviaremos>
            <TextEnviaremos1>para você no seu e-mail.</TextEnviaremos1>
          </ContainerEnviaremos>

          <InputGeral />

          <ButtonNext>
            <TextButton>Avançar</TextButton>
          </ButtonNext>

          <ContainerFooterBottom>
            <FooterCurto />
          </ContainerFooterBottom>
        </MainScreenContainer>
      </Scroll>
    </ContainerSafe>
  );
};

export default ResetPassword;
