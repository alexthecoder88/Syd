import { StyleSheet } from "react-native";

export default class ServiceRegistrationFormScreenStyles {
  constructor(screenDimensions) {
    //The screen dimensions are used to adjust the styles in a responsive way
    this.width = screenDimensions.width;
    this.height = screenDimensions.height;
    this.scaleValue = 0.15;

    console.log("width is===>" + this.width);
    console.log("height=====>" + this.height);
  }

  getStyles() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#c1c6e4"
      },
      titleContainer: {
        marginTop: 50,
        color: "white",
        fontSize: 30,
        marginBottom: 50,
        fontWeight: "bold"
      },
      body: {
        flex: 1,
        alignItems: "center"
      },
      inputContainer: {
        borderBottomColor: "#F5FCFF",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        borderBottomWidth: 1,
        width: 275,
        height: 150,
        marginBottom: 20,
        textAlignVertical: "top"
      }
    });
    return styles;
  }
}
