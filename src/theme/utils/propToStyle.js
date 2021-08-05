import theme from '../theme'
import { mediaQueries } from './mediaQueries'
import { mapValues } from 'lodash'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const propToStyle = propName => (
  props => {
    const propValue = props[ propName ]

    if ( typeof propValue === 'object' ) {
      const { breakpoints } = theme

      const mappedMediaQueries = mapValues( breakpoints, ( value, breakpoint ) => (
        { [ propName ]: propValue[ breakpoint ] }
      ) )

      return mediaQueries( mappedMediaQueries )
    }

    return {
      [ propName ]: props[ propName ]
    }
  }
)