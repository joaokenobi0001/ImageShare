import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { styles } from "../lib/style";
export const Login = () => {
  const [text, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        mode="outline"
        value={text}
        onChangeText={(emailDigitado) => setEmail(emailDigitado)}
      />
      <TextInput
        Label="Eu sou o samba"
        Mode="outlined"
        value={password}
        onChangeText={(valor) => setPassword(valor)}
        secureTextEntry={true}
      />

     <button mode="contained" onProgress={() => console.log("pressed")}>
      logar
     </button>

    </View>

  );
};
