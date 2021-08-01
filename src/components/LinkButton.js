import Link from 'next/link'
import styled from 'styled-components'

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const LinkButtonWrapper = styled.a`
  font-size: ${ ( { theme } ) => theme.typography.text.fontSize }rem;
  font-family: ${ ( { theme } ) => theme.typography.text.fontFamily };
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const LinkButton = ( { children, ...rest } ) => (

  <Link { ...rest } passHref>
    <LinkButtonWrapper>
      { children }
    </LinkButtonWrapper>
  </Link>

)

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default LinkButton