import { StyleSheet } from "react-native";

export default class BusinessRegistrationScreenStyles {
  constructor(screenDimensions) {
    //The screen dimensions are used to adjust the styles in a responsive way
    this.width = screenDimensions.width;
    this.height = screenDimensions.height;
    this.scaleValue = 0.15;
  }

  getStyles() {
    const scaledTitleContainerFontSize = this.width * 0.13;
    const scaledLoginAndSignUpTextFontSize = this.width * 0.04;
    const scaledResetPasswordTextContainerMarginTop = this.width * 0.11;
    const scaledResetPasswordTextContainerFontSize = this.width * 0.04;
    const scaledLoginAndSignUpButtonContainerMarginTop = this.width * 0.06;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#c1c6e4"
      },
      scrollableContainer: {
        alignItems: "center"
      },
      titleContainer: {
        marginTop: 50,
        color: "white",
        fontSize: scaledTitleContainerFontSize,
        marginBottom: 50,
        fontWeight: "bold"
      },
      inputContainer: {
        borderBottomColor: "#F5FCFF",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        borderBottomWidth: 1,
        width: 275,
        height: 45,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center"
      },
      buttonContainer: {
        height: 28,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 135,
        borderRadius: 30,
        backgroundColor: "gray",
        marginBottom: 10
      },
      buttonsRowContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      },
      buttonText: {
        color: "white",
        fontSize: scaledLoginAndSignUpTextFontSize,
        fontWeight: "bold"
      }
    });
    return styles;
  }
}
