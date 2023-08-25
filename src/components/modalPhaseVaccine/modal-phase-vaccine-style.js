import styled from "styled-components/native";

export const ContainerModalPhaseVaccines = styled.Modal``;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const ContainerContentModalPhase = styled.View`
  position: absolute;
  top: 25%;
  left: 7%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  width: 360px;
  height: 481px;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  background: #4c7abb;
`;

export const TextTitleModalPhase = styled.Text`
  font-weight: 900;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  margin-top: 20px;
`;

export const ContainerPhases = styled.View`
  position: relative;
  top: 20px;
  left: -100px;
  flex-direction: column;
  row-gap: 10px;
`;

export const ContainerPhasesInfo = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  width: 80px;
  height: 30px;
  border-left-width: 4px;
  border-left-color: #e3e3e3;
  padding-left: 8px;
  padding-top: 2px;
`;

export const TextPhasesInfo = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
`;

export const ImagePhaseInfo = styled.Image`
  margin-left: -5px;
  width: 8.6px;
  height: 7px;
  transform: ${({ expanded }) =>
    expanded ? "rotate(180deg)" : "rotate(0deg)"};
`;

export const ContainerSubTitleInfo = styled.View`
  flex-direction: column;
  row-gap: 5px;
  position: relative;
  top: 40px;
  left: -55px;
`;

export const ContainerSubTitleInfo1 = styled.View`
  flex-direction: column;
  row-gap: 5px;
  position: relative;
  top: 40px;
  left: -35px;
`;

export const ContainerSubTitleInfo2 = styled.View`
  flex-direction: column;
  row-gap: 5px;
  position: relative;
  top: 40px;
  left: -45px;
`;

export const TextTitle = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
`;

export const ContainerDateInfo = styled.View`
  flex-direction: column;
  row-gap: 5px;
`;

export const TextSubTitle = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

export const ContainerModalProgressBar = styled.View`
  position: relative;
  top: 45px;
  left: -25px;
  width: 223px;
  height: 69px;
  background: #ffffff;
  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: 9px 9px;
  shadow-opacity: 1;
  shadow-radius: 30px;
  elevation: 10;
  box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const TextTitleModalProgressBar = styled.Text`
  margin-top: 10px;
  margin-left: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  color: #273047;
`;

export const TextPercent = styled.Text`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #273047;
  margin-left: 12px;
`;

export const ContainerPosProgress = styled.View`
  margin-top: 0px;
`;