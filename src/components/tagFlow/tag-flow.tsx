import {
  ContainerTagFlow,
  ImageTagFlow,
  TextFlagFlow,
  TitleTagFlow,
} from "./tag-flow-style";
import { ImageSource } from "react-native-vector-icons/Icon";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

const TagFlow = (props: {
  title: string;
  text: string;
  imageTag: ImageSource;
}) => {
  const navigation = useNavigation<propsStack>();

  const navigateScreens = () => {
    if (props.title === "Pacientes") {
      navigation.navigate("ListaPacientes");
    }
    if (props.title === "Meu perfil") {
      navigation.navigate("Paciente");
    }
    if (props.title === "Profissional de saúde") {
      navigation.navigate("ProfissionalResponsavel");
    }
    if (props.title === "Minhas vacinas") {
      navigation.navigate("MyVaccines");
    }
  };

  return (
    <ContainerTagFlow onPress={navigateScreens}>
      <ImageTagFlow>
        <Image source={props.imageTag} />
      </ImageTagFlow>
      <TitleTagFlow>{props.title}</TitleTagFlow>
      <TextFlagFlow>{props.text}</TextFlagFlow>
    </ContainerTagFlow>
  );
};

export default TagFlow;
