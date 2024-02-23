import React from "react";

import { Dimensions } from "react-native";

import footerSenhaImg from "../../../assets/footer/footerSenha.png"

import { ContainerFooter, ImageFooterLongo } from "./footerPassword-style"

const FooterPassword = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <ContainerFooter>
      <ImageFooterLongo
        source={footerSenhaImg}
        screenWidth={JSON.stringify(screenWidth) + "px"}
      />
    </ContainerFooter>
  );
};

export default FooterPassword;
