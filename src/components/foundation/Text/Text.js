import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { propToStyle } from '../../../theme/utils/propToStyle'
import { mediaQueries } from '../../../theme/utils/mediaQueries'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const paragraph1 = css`
  font-size: ${ ( { theme } ) => theme.typographyVariants.paragraph1.fontSize };
  font-weight: ${ ( { theme } ) => theme.typographyVariants.paragraph1.fontWeight };
  line-height: ${ ( { theme } ) => theme.typographyVariants.paragraph1.lineHeight };
`

const smallestException = css`
  font-size: ${ ( { theme } ) => theme.typographyVariants.smallestException.fontSize };
  font-weight: ${ ( { theme } ) => theme.typographyVariants.smallestException.fontWeight };
  line-height: ${ ( { theme } ) => theme.typographyVariants.smallestException.lineHeight };
`

export const TextStylesVariants = {
  smallestException,
  paragraph1
}

const TextBase = styled.span`
  ${ ( { variant, theme } ) => ( TextStylesVariants[ variant ] ) }
  ${ propToStyle( 'textAlign' ) }
`

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const Text = ( { tag, variant, children, ...rest } ) => (
  <TextBase as={ tag } variant={ variant } { ...rest }>{ children }</TextBase>
)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default Text