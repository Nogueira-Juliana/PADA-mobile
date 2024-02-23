import React from "react";
import SplashScreen from "../../screen/splashScreen/splashScreen";
import LoginCadastro from "../../screen/LoginRegistration/loginRegistration";
import Login from "../../screen/login/login";
import { propsNavigationStack } from "./Models";
import PatientRecord from "../../screen/Signin/signin";
import TelaPrincipal from "../../screen/homeScreen/homeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PatientList from "../../screen/patientList/patient-list";
import Patient from "../../screen/patient/patient";
import ProfissionalResponsavel from "../../screen/responsibleProfessional/responsibleProfessional";
import MyVaccines from "../../screen/myVaccines/my-vaccines";
import CodigoCelular from "../../screen/phoneCode/phone-code";
import RedefinirSenha from "../../screen/ResetPassword/resetPassword";
import RecuperacaoSenha from "../../screen/passwordRecovery/passwordRecovery";
import TelaSucesso from "../../screen/successScreen/successScreen";

const { Navigator, Screen } =
  createNativeStackNavigator<propsNavigationStack>();

export default function () {
  return (
    <Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="LoginCadastro" component={LoginCadastro} />
      <Screen name="Login" component={Login} />
      <Screen name="Cadastro" component={PatientRecord} />
      <Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Screen name="Paciente" component={Patient} />
      <Screen
        name="ProfissionalResponsavel"
        component={ProfissionalResponsavel}
      />
      <Screen name="SplashScreen" component={SplashScreen} />
      <Screen name="MyVaccines" component={MyVaccines} />
      <Screen name="CodePhone" component={CodigoCelular} />
      <Screen name="RedefinirSenha" component={RedefinirSenha} />
      <Screen name="RecuperacaoSenha" component={RecuperacaoSenha} />
      <Screen name="TelaSucesso" component={TelaSucesso} />
      {/* <Screen name="TabRoutes" component={TabRoutes} /> */}
    </Navigator>
  );
}

/*
      <Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Screen name="ListaPacientes" component={PatientList} />
      <Screen name="Paciente" component={Patient} />
      <Screen
        name="ProfissionalResponsavel"
        component={ProfissionalResponsavel}
      />
      <Screen name="MyVaccines" component={MyVaccines} />
      */
