import { css } from 'styled-components'
import { keys } from 'lodash'
import theme from '../theme'

export function mediaQueries ( cssByBreakpoints ) {
  return keys( cssByBreakpoints ).map( key => (
    css`
      @media screen and ( min-width: ${ theme.breakpoints[ key ] }px ) {
        ${ cssByBreakpoints[ key ] }
      }
    `
  ) )
}