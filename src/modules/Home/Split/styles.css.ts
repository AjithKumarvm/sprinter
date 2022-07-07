import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes';
import vars from 'common/themes/light.css'

export default {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'auto',
  })
}; 

export const splitItem = recipe({
  base: {
    width: 100,
    color: 'black',
    justifyContent: 'left'
  },
  variants: {
    overflow: {
      true: {
        color: 'red'
      },
      false: {
        color: 'black'
      }
    }
  },
})