import React, { Fragment, useState } from "react";
import Header from "../../components/Headers/header/header";
import FooterCurto from "../../components/Footers/footer/footer";
import { useNavigation } from "@react-navigation/native";
import { ContainerSafe, Scroll } from "../login/login-style";
import { MainScreenContainer } from "../homeScreen/homeScreen-style";
import { TextButton } from "../Signin/signin-style";
import { propsStack } from "../../routes/Stack/Models";
import { Platform, TextInput, View } from "react-native";
import {
  ContinueButton,
  CreateContainer,
  ImageFooterPassword,
  EmailPasswordButtonContainer,
  TextRecovery,
} from "./passwordRecovery-style";
import { TextEnviaremos } from "../ResetPassword/resetPassword-style";
import footerSenhaImg from "../../assets/footerSenha.png";
import { ContainerFooter } from "../../components/Footers/footerLongo/footerLongo-style";
import FooterLongo from "../../components/Footers/footerLongo/footerLongo";
import FooterSenha from "../../components/Footers/footerPassword/footerPassword";

const PasswordRecovery = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <MainScreenContainer>
          <Header back={true} />

          <TextRecovery>Recuperação de senha</TextRecovery>
          <CreateContainer>
            <TextEnviaremos>Crie sua nova senha abaixo</TextEnviaremos>
          </CreateContainer>

          <View>
            <EmailPasswordButtonContainer placeholder="Nova senha" />
          </View>

          <View>
            <EmailPasswordButtonContainer placeholder="Confirme sua senha" />
          </View>

          <ContinueButton>
            <TextButton>Continuar</TextButton>
          </ContinueButton>

          <FooterSenha />
        </MainScreenContainer>
      </Scroll>
    </ContainerSafe>
  );
};

export default PasswordRecovery;
