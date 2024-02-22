import React from "react";
import SplashScreen from "../../screen/splashScreen/splashScreen";
import Login from "../../screen/Login/login";
import { propsNavigationStack } from "./Models";
import PatientRecord from "../../screen/PasswordCriation/cadastro";
import TelaPrincipal from "../../screen/Home/telaPrincipal";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Patient from "../../screen/Patient/patient";
import ProfissionalResponsavel from "../../screen/ResponsibleDoctor/profissionalResponsável";
import MyVaccines from "../../screen/minhasVacinas/my-vaccines";
import RedefinirSenha from "../../screen/PasswordRedefine/redefinirSenha";
import RecuperacaoSenha from "../../screen/PasswordRecovery/recuperacaoSenha";
import TelaSucesso from "../../screen/PasswordRecoverySuccess/telaSucesso";

const { Navigator, Screen } =
  createNativeStackNavigator<propsNavigationStack>();

export default function () {
  return (
    <Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
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
