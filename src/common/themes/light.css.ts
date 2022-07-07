import { createGlobalTheme } from '@vanilla-extract/css';


export default createGlobalTheme(':root',{
  color: {
    brand: '#fff',
    text: '#000'
  },
  space: {
    small: '4px',
    medium: '8px',
    large: '12px'
  }
});