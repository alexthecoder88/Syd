import {StyleSheet} from 'react-native';

export default class BusinessHomeScreenDrawerNavigatorStyles  {

    constructor(screenDimensions){

      //The screen dimensions are used to adjust the styles in a responsive way
      this.width = screenDimensions.width;
      this.height = screenDimensions.height
      this.scaleValue = 0.15;

      console.log("in LoginScreenStyles constructor=======")
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
        alignItems:'center',
        backgroundColor: '#c1c6e4',
      },  
  
    });
       return styles;
   }
}