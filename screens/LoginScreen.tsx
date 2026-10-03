import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Dimensions,
  Image as ImageComponent,
  Alert,
} from "react-native";
import { CustomButton } from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    const emailValido = email.trim().length > 0;
    const passwordValido = password.trim().length > 0;

    if (!emailValido || !passwordValido) {
      Alert.alert("Atención", "Por favor ingresa correo y contraseña");
      return;
    }
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <ImageComponent
        source={require("../assets/decor/fondo2.jpeg")}
        style={styles.fondo}
      />
      <View style={styles.contenedorCentrado}>
        <View style={styles.tarjeta}>
          <Text style={styles.titulo}>Edna's lab</Text>
          <Text style={styles.subtitulo}>Acceso a la colección</Text>
          <TextInput
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <CustomButton
            title="Entrar"
            variant="primary"
            style={styles.boton}
            onPress={handleLogin}
          />
          <Text style={styles.olvido}>¿Olvidaste tu contraseña?</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  fondo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contenedorCentrado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  tarjeta: {
    width: width * 0.85,
    maxWidth: 350,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 30,
    padding: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 32,
    fontWeight: "900",
    color: "#1a1a2e",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 14,
    color: "#6c757d",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "#f8f9fa",
    color: "#1a1a2e",
    textAlign: "center",
  },
  boton: {
    marginTop: 10,
    backgroundColor: "#ff6b6b",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    width: "80%",
  },
  olvido: {
    marginTop: 15,
    color: "#6c757d",
    textAlign: "center",
    fontSize: 12,
    marginBottom: 20,
  },
});
