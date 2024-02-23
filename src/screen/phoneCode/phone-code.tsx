import { Platform } from "react-native";
import {
  ButtonAdvanced,
  CodeInput,
  ContainerCode,
  ContainerFooterBottom,
  ContainerInformationCode,
  ContainerMain,
  ContainerSafe,
  Scroll,
  SubTitleInformationCode,
  TextButtonAdvanced,
  TitleInformationCode,
  TitleMainCode,
} from "./phone-code-style";
import Header from "../../components/Headers/header/header";
import FooterCodigoCelular from "../../components/Footers/footerPhoneCode/footer-phone-code";
import { useRef, useState } from "react";

const PhoneCode = () => {
  const [codes, setCodes] = useState(["", "", "", "", "", "", "", ""]);
  const codeInputs = useRef(Array(8).fill(null));

  const handleCodeChange = (text: string, index: number) => {
    if (/^\d?$/.test(text)) {
      const newCodes = [...codes];
      newCodes[index] = text;
      setCodes(newCodes);

      if (text !== "" && index < 7) {
        codeInputs.current[index + 1].focus();
      }
    }
  };

  return (
    <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Header back={true} />
      <ContainerMain>
        <TitleMainCode>Código de Confirmação</TitleMainCode>

        <ContainerInformationCode>
          <TitleInformationCode>Insira o código</TitleInformationCode>
          <SubTitleInformationCode>
            Insira o código de login de 8 dígitos que enviamos para o seu número
            com final 0000.
          </SubTitleInformationCode>

          <ContainerCode>
            {codes.map((code: any, index) => (
              <CodeInput
                key={index}
                value={code}
                onChangeText={(text: any) => handleCodeChange(text, index)}
                keyboardType="default"
                maxLength={1}
                ref={(input: any) => (codeInputs.current[index] = input)}
                autoFocus={index === 0}
              />
            ))}
          </ContainerCode>

          <ButtonAdvanced>
            <TextButtonAdvanced>Avançar</TextButtonAdvanced>
          </ButtonAdvanced>
        </ContainerInformationCode>
      </ContainerMain>
      <ContainerFooterBottom>
        <FooterCodigoCelular />
      </ContainerFooterBottom>
    </ContainerSafe>
  );
};
/**<ContainerFooterBottom>
          <FooterCodigoCelular />
        </ContainerFooterBottom> */
export default PhoneCode;
