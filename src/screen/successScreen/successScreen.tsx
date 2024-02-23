import { Platform } from "react-native";
import {
  ButtonEnter,
  GeneralContainer,
  MainSafeContainerPatients ,
  ImageSuccess,
  TextButtonEnter,
  TextSuccess,
  TextSuccessTitle,
} from "./successScreen-style";
import Header from "../../components/Headers/header/header";
import FooterCodigoCelular from "../../components/Footers/footerPhoneCode/footer-phone-code";
import React from "react";
import Sucesso from "../../assets/image-icons/sucesso.png";

const SuccessScreen = () => {
  return (
    <MainSafeContainerPatients 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header back={false} />
      <GeneralContainer>
        <TextSuccessTitle>Recuperação de senha</TextSuccessTitle>
        <TextSuccess>Sua nova senha foi criada com sucesso!</TextSuccess>
        <ImageSuccess source={Sucesso} />
        <ButtonEnter>
          <TextButtonEnter>Entrar</TextButtonEnter>
        </ButtonEnter>
      </GeneralContainer>
      <FooterCodigoCelular />
    </MainSafeContainerPatients >
  );
};

export default SuccessScreen;
