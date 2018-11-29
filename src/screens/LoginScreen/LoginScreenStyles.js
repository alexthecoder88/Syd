import { StyleSheet } from "react-native";

export default class LoginScreenStyles {
  constructor(screenDimensions) {
    //The screen dimensions are used to adjust the styles in a responsive way
    this.width = screenDimensions.width;
    this.height = screenDimensions.height;
    this.scaleValue = 0.15;

    console.log("in LoginScreenStyles constructor=======");
    console.log("width is===>" + this.width);
    console.log("height=====>" + this.height);
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
      titleContainer: {
        marginTop: 50,
        color: "white",
        fontSize: scaledTitleContainerFontSize,
        marginBottom: 30,
        fontWeight: "bold"
      },
      loginAndSignUpButtonContainer: {
        marginTop: scaledLoginAndSignUpButtonContainerMarginTop
      },
      loginAndSignUpButton: {
        color: "black",
        height: 30,
        width: 30
      },
      radioButtonsContainer: {
        flexDirection: "row"
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
      resetPasswordContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: scaledResetPasswordTextContainerMarginTop
      },
      resetPasswordTextContainer: {
        color: "white",
        fontWeight: "bold",
        fontSize: scaledResetPasswordTextContainerFontSize,
        textDecorationLine: "underline"
      },
      inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: "#FFFFFF",
        flex: 1
      },
      inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: "center"
      },
      buttonContainer: {
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
        width: 200,
        borderRadius: 30,
        backgroundColor: "gray"
      },
      loginAndSignUpButtonText: {
        color: "white",
        fontSize: scaledLoginAndSignUpTextFontSize,
        fontWeight: "bold"
      }
    });
    return styles;
  }
}
