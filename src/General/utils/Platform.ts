import {Platform} from 'react-native';

export const os = Platform.OS;
export const isAndroidElseIOS = os === 'android';
