import { style } from '@vanilla-extract/css'
import vars from 'common/themes/light.css'

export default {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    height: '100%',
    backgroundColor: vars.color.brand,
    color: vars.color.text,
    overflow: 'auto',
  }),
  row: style({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'row',
    padding: vars.space.large,
    overflow: 'auto',
  }),
  taskArea: style({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden'
  })
}; 