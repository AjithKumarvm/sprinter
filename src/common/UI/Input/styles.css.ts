import { style } from '@vanilla-extract/css'

export default {
    container: style({
        display: 'flex',
        flexDirection: 'column',
    }),
    label: style({
        fontSize: 12
    }),
    input: style({
        padding: 3,
        border: '1px solid #CCC',
        borderRadius: 4
    })
}