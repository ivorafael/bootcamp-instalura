import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { get } from 'lodash'

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

const title = css`
  ${ ( { theme } ) => css`
    font-size: ${ theme.typographyVariants.titleXS.fontSize };
    font-weight: ${ theme.typographyVariants.titleXS.fontWeight };
    line-height: ${ theme.typographyVariants.titleXS.lineHeight };
  `}

  ${ mediaQueries( {
  md: css`
    ${ ( { theme } ) => css`
      font-size: ${ theme.typographyVariants.title.fontSize };
      font-weight: ${ theme.typographyVariants.title.fontWeight };
      line-height: ${ theme.typographyVariants.title.lineHeight };
    `}`
} ) }`

export const TextStylesVariants = {
  smallestException,
  paragraph1,
  title
}

const TextBase = styled.span`
  ${ ( { variant } ) => ( TextStylesVariants[ variant ] ) }
  color: ${ ( { theme, color } ) => get( theme, `colors.${ color }.color` ) };
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