import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  photoPlaceholder: {
    position: "absolute",
    top: -60,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  photoText: {
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
    fontSize: 14,
  },
  addPhotoBtn: {
    position: "absolute",
    right: -12,
    top: 81,
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    borderRadius: 12.5,
  },
  title: {
    marginBottom: 33,
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35.16,
    letterSpacing: 0.3,
  },
  input: {
    height: Platform.OS === "ios" ? 52 : 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
  inputsContainer: {
    rowGap: 16,
    marginBottom: 43,
  },
  showPasswordBtnContainer: {
    position: "absolute",
    right: 16,
    paddingTop: Platform.OS === "ios" ? 16 : 14.5,
    paddingBottom: Platform.OS === "ios" ? 16 : 14.5,
  },
  showPasswordBtnText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
  submitBtnContainer: {
    padding: 16,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
  },
  submitBtnText: {
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
  logInBtnContainer: {
    padding: 16,
    borderRadius: 100,
  },
  logInBtnText: {
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
});
