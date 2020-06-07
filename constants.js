import {Dimensions} from 'react-native';

const {witdh, height} = Dimensions.get('window');

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = witdh;

export const TEXT_INPUT_HEIGHT = 150;
export const FOOTER_HEIGHT = 70;

export const LOGIN_VIEW_HEIGHT = TEXT_INPUT_HEIGHT + FOOTER_HEIGHT;
