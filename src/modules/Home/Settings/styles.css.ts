import { style } from '@vanilla-extract/css'
import vars from 'common/themes/light.css'

export default {
  container: style({
    display: 'flex',
    flexDirection: 'row',
    background: '#CCC',
    padding: 10,
    justifyContent: 'flex-end'
  }),
}; 