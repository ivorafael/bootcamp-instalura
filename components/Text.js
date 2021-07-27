import styled from 'styled-components'

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const Text = styled.p`
  font-size: ${ ( { theme } ) => theme.typography.text.fontSize };
  font-family: ${ ( { theme } ) => theme.typography.text.fontFamily };
`

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default Text