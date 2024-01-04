import {isAndroidElseIOS} from '../utils';

import Constants from 'expo-constants';

export const paddingTop = isAndroidElseIOS ? 8 : Constants.statusBarHeight;
export const paddingBottom = 35;