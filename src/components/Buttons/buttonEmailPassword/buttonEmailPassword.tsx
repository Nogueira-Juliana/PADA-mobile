import {
  ButtonEmailPasswordContainer,
  ButtonImageIcon,
  ImageLogo,
  TextInputButton,
} from "./buttonEmailPassword-style";
import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";

import { ImageSource } from "react-native-vector-icons/Icon";



function ButtonEmailPassword(props: {
  labelButton: String;
  imageButton: ImageSource;

}) {
  const navigation = useNavigation<propsStack>();
  return (
    <View>
      <ButtonEmailPasswordContainer>

        <ButtonImageIcon>
          <ImageLogo>
            <Image source={props.imageButton}></Image>
          </ImageLogo>
        </ButtonImageIcon>


        <TextInput
          placeholder='ola'
        >

        </TextInput>

      </ButtonEmailPasswordContainer>


    </View>
  );
}

export default ButtonEmailPassword;
