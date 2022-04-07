import React from "react";
import { Text, Image } from "react-native";
import { Splash, SplashContent, SplashImage, SplashImageLoader, SplashText } from "./style";


const splashComponent = () => {
  return (
    <Splash>
      <SplashContent>
        <SplashImage
          source={require('../../../assets/logo.png')}
        />
      <SplashText>
        Finanças Divididas
        </SplashText>
      <SplashImageLoader
          source={require('../../../assets/loader.png')}
        />
          
        </SplashContent>
    </Splash>
  );
};

export default splashComponent;
