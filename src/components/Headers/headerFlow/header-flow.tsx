import React, { useState } from "react";
import {
  ButtonNextVaccine,
  ButtonRemember,
  ContainerBackFlow,
  ContainerButtonsHeaderFlow,
  ContainerDataPatient,
  ContainerHeaderFlow,
  ContainerHeaderInformationPerson,
  ContainerHeaderVaccines,
  ContainerImagePerson,
  ContainerInputCalendarVaccines,
  ContainerSafeHeader,
  ContainerTitles,
  IconButtonNextVaccine,
  IconTime,
  IconWrapper,
  IconWrapperCalendar,
  ImageCalendar,
  ImagePerson,
  InputCalendarVaccines,
  SubTitleHeaderFlow,
  TextButtonNextVaccine,
  TextButtonRemember,
  TextButtonVaccine,
  TextDataPatient,
  TitleHeaderFlow,
  TitleHeaderVaccines,
} from "./header-flow-style";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";
import Person from "../../../assets/image-icons/imgUserItem.png";
import Calendar from "../../../assets/image-icons/calendar.png";
import Time from "../../../assets/image-icons/time.png";
import Doctor from "../../../assets/imgDoctor.png";

//Style header doctor
import {
  ContainerHeaderInformationDoctor,
  ContainerImageDoctor,
  ContainerInfoDoctor,
  ContainerSubtitles,
  ImageDoctor,
  SubTitleHeaderName,
  SubTitleHeaderSpecialty,
  TitleHeaderDoctor,
} from "./header-flow-doctor-style";

const HeaderFlow = (props: {
  title: string | undefined;
  backButton: boolean;
  buttonVaccine: boolean;
  typeHeader: "patient" | "doctor";
  photo?: any;
}) => {
  const navigation = useNavigation<propsStack>();
  const [date, setDate] = useState("");

  return (
    <ContainerSafeHeader>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ContainerHeaderFlow>
        {props.backButton === true ? (
          <ContainerBackFlow onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" color="#000" />
          </ContainerBackFlow>
        ) : null}
        {props.typeHeader === "patient" && (
          <ContainerHeaderInformationPerson>
            <ContainerImagePerson>
              <ImagePerson
                source={
                  props.photo
                    ? { uri: `data:image/jpeg;base64,${props.photo}` }
                    : Person
                }
              />
            </ContainerImagePerson>
            <ContainerTitles>
              <TitleHeaderFlow>{props.title}</TitleHeaderFlow>
              {props.backButton === true && props.buttonVaccine === true ? (
                <>
                  <SubTitleHeaderFlow>
                    Sua próxima consulta está agendada para:
                  </SubTitleHeaderFlow>
                  <ContainerDataPatient>
                    <ImageCalendar source={Calendar} />
                    <TextDataPatient>12/10/2023</TextDataPatient>
                  </ContainerDataPatient>
                  <ContainerButtonsHeaderFlow>
                    <ButtonNextVaccine>
                      <TextButtonNextVaccine>
                        Sua próxima vacina: 01/05{" "}
                      </TextButtonNextVaccine>
                      <IconButtonNextVaccine>
                        <Icon name="chevron-back-outline" color="#000" />
                      </IconButtonNextVaccine>
                    </ButtonNextVaccine>
                    <ButtonRemember activeOpacity={0.8}>
                      <TextButtonRemember>Lembrar</TextButtonRemember>
                      <IconTime source={Time} />
                    </ButtonRemember>
                  </ContainerButtonsHeaderFlow>
                </>
              ) : (
                <ContainerHeaderVaccines>
                  <TitleHeaderVaccines>
                    Busque em seu histórico
                  </TitleHeaderVaccines>
                  <ContainerInputCalendarVaccines>
                    <IconWrapper>
                      <Icon
                        name="search"
                        size={25}
                        color="#36454F"
                        style={{ marginLeft: 5 }}
                      />
                    </IconWrapper>
                    <InputCalendarVaccines
                      onChangeText={(text: string) => {
                        setDate(text);
                      }}
                      value={date}
                      placeholder="Data"
                      placeholderTextColor="#A9A9A9"
                    />
                    <IconWrapperCalendar>
                      <Icon
                        name="calendar"
                        size={25}
                        color="#36454F"
                        style={{ marginRight: 10 }}
                      />
                    </IconWrapperCalendar>
                  </ContainerInputCalendarVaccines>
                </ContainerHeaderVaccines>
              )}
            </ContainerTitles>
          </ContainerHeaderInformationPerson>
        )}

        {props.typeHeader === "doctor" && (
          <ContainerHeaderInformationDoctor>
            <TitleHeaderDoctor>Profissional responsável</TitleHeaderDoctor>
            <ContainerInfoDoctor>
              <ContainerImageDoctor>
                <ImageDoctor
                  source={
                    props.photo
                      ? { uri: `data:image/jpeg;base64,${props.photo}` }
                      : Person
                  }
                />
              </ContainerImageDoctor>
              <ContainerSubtitles>
                <SubTitleHeaderName>{props.title}</SubTitleHeaderName>
                <SubTitleHeaderSpecialty>Clínico Geral</SubTitleHeaderSpecialty>
              </ContainerSubtitles>
            </ContainerInfoDoctor>
          </ContainerHeaderInformationDoctor>
        )}
      </ContainerHeaderFlow>
    </ContainerSafeHeader>
  );
};

export default HeaderFlow;
