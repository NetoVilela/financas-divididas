import styled from 'styled-components';
import {Animated} from 'react-native'

export const Splash = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const SplashContent = styled.View`
    flex: 1;
    max-height: 60%;
    align-items: center;
    justify-content: space-between;
`;

export const SplashImage = styled.Image`
    width:  250;
    height: 250;
`;

export const SplashImageLoader = styled.Image`
    width:  50;
    height: 50;
`;

export const SplashText = styled.Text`
    color: #FFF;
    font-size: 30px;
`;