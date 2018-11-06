import {StyleSheet} from 'react-native';

export default class CustomDrawerComponentStyles  {

    constructor(screenDimensions){

      //The screen dimensions are used to adjust the styles in a responsive way
      this.width = screenDimensions.width;
      this.height = screenDimensions.height
      this.scaleValue = 0.15;

      console.log("in CustomDrawerComponentStyles  constructor=======")
      console.log("width is===>"+this.width)
      console.log("height=====>"+this.height)
    }

    getStyles(){
      const scaledTitleContainerFontSize = this.width * 0.13;
      const scaledLoginAndSignUpTextFontSize = this.width * 0.04;
      const scaledResetPasswordTextContainerMarginTop = this.width * 0.11;
      const scaledResetPasswordTextContainerFontSize = this.width * 0.04;
      const scaledLoginAndSignUpButtonContainerMarginTop = this.width * 0.06;

      const styles =StyleSheet.create({
        container: {
        flex: 1,
        position:'absolute',
        alignSelf: 'center',
        bottom:20,
      },
        logoutTextContainer: {
        fontSize:22,
        color:'#c1c6e4',
        fontWeight:'bold'
      },
    });
       return styles;
   }
}