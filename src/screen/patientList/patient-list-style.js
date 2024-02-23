import styled from "styled-components/native";

export const MainSafeContainerPatients = styled.KeyboardAvoidingView`
  flex: 1;
  display: flex;
  background: #d1d1d1;
`;
export const ScrollPatients = styled.ScrollView`
  flex: 1;
`;
export const PatientsContainer = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: 55%;
  justify-content: flex-start;
  z-index: -1;
`;
