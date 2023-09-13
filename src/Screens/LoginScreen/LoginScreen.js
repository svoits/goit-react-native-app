import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import { styles } from "./LoginScreen.styles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  const handleFormSubmit = () => {
    const formData = {
      email,
      password,
    };
    console.log(formData);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            ...styles.container,
            paddingBottom: isOpenKeyboard ? 10 : 144,
            height: isOpenKeyboard ? 250 : "auto",
          }}
        >
          <Text style={styles.title}>Увійти</Text>
          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setIsOpenKeyboard(true)}
              onBlur={() => setIsOpenKeyboard(false)}
            />
            <View style={{ position: "relative" }}>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                textContentType="password"
                secureTextEntry={isVisiblePassword}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsOpenKeyboard(true)}
                onBlur={() => setIsOpenKeyboard(false)}
              />
              <TouchableOpacity
                onPress={() => setIsVisiblePassword((prevState) => !prevState)}
                style={styles.showPasswordBtnContainer}
                accessibilityLabel="Show or hide password"
              >
                <Text style={styles.showPasswordBtnText}>
                  {isVisiblePassword ? "Показати" : "Сховати"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleFormSubmit}
            style={styles.submitBtnContainer}
            accessibilityLabel="Sign Up"
          >
            <Text style={styles.submitBtnText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logInBtnContainer}
            accessibilityLabel="Link to Log In page"
          >
            <Text style={styles.logInBtnText}>
              Немає акаунту? Зареєстуватися
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
