import { Dimensions, PixelRatio } from 'react-native';
import { SIZE_MATTERS_BASE_WIDTH, SIZE_MATTERS_BASE_HEIGHT } from '@env';

const { width, height, scale : windowScale } = Dimensions.get('window');

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = SIZE_MATTERS_BASE_WIDTH || 390;
const guidelineBaseHeight = SIZE_MATTERS_BASE_HEIGHT || 844;
const windowHeight = height;
const windowWidth = width;
const [shortDimension, longDimension] = windowWidth < windowHeight ? [windowWidth, windowHeight] : [windowHeight, windowWidth];


export const scale = size => Math.round(
    PixelRatio.roundToNearestPixel(shortDimension / guidelineBaseWidth * size));

export const verticalScale = size => Math.round(
    PixelRatio.roundToNearestPixel(longDimension / guidelineBaseHeight * size));
export const moderateScale = (size, factor = 0.5) => Math.round(
    PixelRatio.roundToNearestPixel(size + (scale(size) - size) * factor));
export const moderateVerticalScale = (size, factor = 0.5) => Math.round(
    PixelRatio.roundToNearestPixel(size + (verticalScale(size) - size) * factor));

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
