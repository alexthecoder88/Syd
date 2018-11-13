import { StyleSheet } from "react-native";

export default class CustomTextInputStyles {
  constructor(screenDimensions) {
    //The screen dimensions are used to adjust the styles in a responsive way
    this.width = screenDimensions.width;
    this.height = screenDimensions.height;
    this.scaleValue = 0.15;

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
      }
    });
    return styles;
  }
}
