import styled from 'styled-components'

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const Title = styled.h1`
  font-size: ${ ( { theme } ) => theme.typography.title.fontSize };
  font-family: ${ ( { theme } ) => theme.typography.title.fontFamily };
  color: ${ ( { theme } ) => theme.colors.primary };
`

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default Title