import { StyleSheet } from "react-native";

export default class ServicesScreenStyles {
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
      }
    });
    return styles;
  }
}
