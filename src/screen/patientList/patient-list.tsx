import { Platform } from "react-native";
import AddPatient from "../../components/Patients/addPatient/add-patient";
import GridMenu from "../../components/grid-menu/grid-menu";
import HeaderFlow from "../../components/Headers/headerFlow/header-flow";
import {
  PatientsContainer,
  MainSafeContainerPatients,
  ScrollPatients,
} from "./patient-list-style";
import TabBar from "../../components/Buttons/buttonTabBar/buttonTabBar";

const PatientList = () => {
  return (
    <MainSafeContainerPatients
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollPatients>
        <HeaderFlow
          title="Olá"
          backButton={true}
          buttonVaccine={false}
          typeHeader={"patient"}
        />
        <PatientsContainer>
          <GridMenu />
          <AddPatient />
        </PatientsContainer>
      </ScrollPatients>
      <TabBar />
    </MainSafeContainerPatients>
  );
};

export default PatientList;
