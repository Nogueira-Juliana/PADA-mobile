import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { ImageFooterCode } from "./footer-phone-code-style";

import elipse1 from "../../../assets/footer/footerSenha.png";

const FooterPhoneCode = () => {
  return (
    <SafeAreaView>
      <ImageFooterCode source={elipse1} />
    </SafeAreaView>
  );
};

export default FooterPhoneCode;
