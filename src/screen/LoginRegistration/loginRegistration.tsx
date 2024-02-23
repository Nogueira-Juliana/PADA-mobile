import React, { useEffect } from "react";
import { ContainerMain } from "./loginRegistration-style";
import logo from "../../assets/logo/logo.png";
import { Image, TouchableOpacity } from "react-native";
import ButtonCadastrar from "../../components/Buttons/buttonCadastrar/buttonCadastrar";
import Header from "../../components/Headers/header/header";
import FooterLongo from "../../components/Footers/footerLongo/footerLongo";
import { MainScreenContainer } from "../homeScreen/homeScreen-style";
import { checkLoginStatus } from "../../service/requests";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import BlueButton from "../../components/Buttons/bluebutton/BlueButton";

const LoginRegistration = () => {
  const navigation = useNavigation<propsStack>();

  useEffect(() => {
    const checkStatus = async () => {
      const isLoggedIn = await checkLoginStatus();
      if (isLoggedIn) {
        navigation.navigate("TelaPrincipal");
      }
    };

    checkStatus();
  }, []);

  return (
    <MainScreenContainer>
      <Header back={false} />
      <ContainerMain>
        <Image source={logo} />

        <TouchableOpacity onPress={() => navigation.navigate("Login", { name: "Login" })}>
          <BlueButton buttontext={'Login'} />
        </TouchableOpacity>

        <ButtonCadastrar />
      </ContainerMain>
      <FooterLongo />
    </MainScreenContainer>
  );
};

export default LoginRegistration;
