import { useState, useEffect } from "react";
import TabBar from "../../components/Buttons/buttonTabBar/buttonTabBar";
import DataDoctor from "../../components/Patients/dataDoctor/data-doctor";
import HeaderFlow from "../../components/Headers/headerFlow/header-flow";
import {
  MainSafeContainerPatient,
  Scroll,
} from "./responsibleProfessional-style";
import {
  TDoctor,
  getDataUserStorage,
  getDoctorById,
  getPatientDoctorId,
} from "../../service/requests";
import store from "../../store/store";
import { Buffer } from "buffer";

const ResponsibleProfessional = () => {
  const doctor: TDoctor = store.getState();

  return (
    <MainSafeContainerPatient>
      <Scroll>
        <HeaderFlow
          title={doctor.name}
          backButton={true}
          buttonVaccine={true}
          typeHeader="doctor"
          photo={doctor.photo}
        />
        <DataDoctor
          crm={doctor.CRM}
          sobre={doctor.about}
          especialidade={doctor.specialty}
        />
      </Scroll>
      <TabBar />
    </MainSafeContainerPatient>
  );
};

export default ResponsibleProfessional;
