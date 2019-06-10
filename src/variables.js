export const pointSixteen = 16;
export const pointEight = 8;

export const bgColor = {
  primary: '#0d47a1',
  secondary: '#4B515D',
  success: '#1B5E20',
  danger: '#CC0000',
  warning: '#FF8800',
}

export const lightGrey = '#d0d0d0';

export const setColor = (tone, themeTones) => {
  themeTones = themeTones || {};
  const toneVal = tone || 'primary';
  const color = {
    primary: themeTones.primary || bgColor.primary,
    secondary: themeTones.secondary || bgColor.secondary,
    success: themeTones.success || bgColor.success,
    danger: themeTones.danger || bgColor.danger,
    warning: themeTones.warning || bgColor.warning,
  };

  return color[toneVal];
}

export const setSize = (size) => {
  if (size === 'xs') return 28;
  if (size === 'sm') return 32;
  else if (size === 'lg') return 48;
  else return 40;
}

export const setFontSize = (size) => {
  if (size === 'xs') return .8;
  if (size === 'sm') return .9;
  else if (size === 'lg') return 1.4;
  else return 1;
}

export const lightenDarkenColor = (col, amt) => {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}