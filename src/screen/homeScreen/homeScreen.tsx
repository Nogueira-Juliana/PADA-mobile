import React, { useEffect, useState } from "react";
import HeaderFlow from "../../components/Headers/headerFlow/header-flow";
import {
  ContainerListDoctor,
  TagFlowListContainer,
  MainContainer,
  MainContainerSafe,
} from "./homeScreen-style";
import TagFlow from "../../components/tagFlow/tag-flow";

import Coracao from "../../assets/image-icons/imgCoracao.png";
import Remedio from "../../assets/image-icons/imgRemedio.png";
import Paciente from "../../assets/image-icons/imgPaciente.png";
import ProfissionalSaude from "../../assets/image-icons/profissionalSaude.png";
import Perfil from "../../assets/image-icons/imgPerfil.png";
import TabBar from "../../components/Buttons/buttonTabBar/buttonTabBar";
import { FlatList } from "react-native";
import {
  getDataUserStorage,
  getDoctorById,
  getPatientDoctorId,
} from "../../service/requests";
import AsyncStorage from "@react-native-async-storage/async-storage";
import storePatient from "../../store/storePatient";
import apiPADA from "../../service/api";

const HomeScreen = () => {
  const [roleUser, setRoleUser] = useState("");
  const [name, setName] = useState("");
  const [patient, setPatient]: any = useState({});

  const getDoctorId = async () => {
    try {
      let id: string | any = await AsyncStorage.getItem("doctorId");
      await getDoctorById(id);
    } catch (err: unknown) {
      console.log(err);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const fetchDataPatient = async () => {
      await getPatientDoctorId(false);
      if (isMounted) {
        setPatient(storePatient.getState());
        /*try {
          let id: string | any = await AsyncStorage.getItem("id");
          let tokenUser: string | any = await AsyncStorage.getItem("token");

          await apiPADA
            .get(`/patients/${JSON.parse(id)}`, {
              headers: {
                Authorization: JSON.parse(tokenUser),
              },
            })
            .then((response: any) => {
              AsyncStorage.setItem("@patient", JSON.stringify(response.data));
            });
        } catch (err) {
          console.log("Error:", err);
        }*/
      }
    };
    const fetchPatientInterval = setInterval(fetchDataPatient, 1000);

    getDoctorId();

    return () => {
      isMounted = false;
      clearInterval(fetchPatientInterval);
    };
  }, []);

  let role: any = roleUser;
  getDataUserStorage({ setRoleUser, setName });

  const array = [
    {
      image: Coracao,
      title: "Minha saúde",
      text: "Seu histórico de saúde",
    },
    {
      image: Remedio,
      title: "Minhas vacinas",
      text: "Seu histórico de medicamentos",
    },
    {
      image: ProfissionalSaude,
      title: "Profissional de saúde",
      text: "Conheça o especialista",
    },
    {
      image: Perfil,
      title: "Meu perfil",
      text: "Suas informações de cadastro",
    },
  ];

  const renderItem = ({ item }: any): any => {
    return (
      <TagFlow imageTag={item.image} title={item.title} text={item.text} />
    );
  };

  return (
    <MainContainerSafe>
      <HeaderFlow
        title={`Olá, ${name}`}
        backButton={true}
        buttonVaccine={true}
        typeHeader="patient"
        photo={patient.photo}
      />
      <MainContainer>
        {role.length === 9 ? (
          <TagFlowListContainer>
            <FlatList
              data={array}
              renderItem={renderItem}
              keyExtractor={(item) => item.title}
              numColumns={2}
            />
          </TagFlowListContainer>
        ) : (
          <ContainerListDoctor>
            <TagFlow
              imageTag={Paciente}
              title={"Pacientes"}
              text={"Conheça cada um dos seus pacientes"}
            />
          </ContainerListDoctor>
        )}
      </MainContainer>
      <TabBar />
    </MainContainerSafe>
  );
};

export default HomeScreen;