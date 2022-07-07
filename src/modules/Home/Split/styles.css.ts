import { style } from '@vanilla-extract/css'
import vars from 'common/themes/light.css'

export default {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'auto',
  }),
  splitItem: style({
    color: vars.color.text,
  }),
  splitItemOverflow: style({
    color: 'red',
  }),
}; 