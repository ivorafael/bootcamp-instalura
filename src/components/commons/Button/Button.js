import styled, { css } from "styled-components"
import { get } from "lodash"

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const ButtonDefault = css`
  background-color: ${ ( { theme, variant } ) => get( theme, `colors.${ variant }.color` ) };
  color: ${ ( { theme, variant } ) => get( theme, `colors.${ variant }.contrastText` ) };
`

const ButtonGhost = css`
  color: ${ ( { theme, variant } ) => get( theme, `colors.${ variant }.color` ) };
  background-color: transparent;
`

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: ${ ( { theme } ) => theme.borderRadius };
  transition: ${ ( { theme } ) => theme.transition };
  
  ${ ( { ghost } ) => ( ghost ? ButtonGhost : ButtonDefault ) }

  &:hover,
  &:focus {
      opacity: .5;
  }
`

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default Button
