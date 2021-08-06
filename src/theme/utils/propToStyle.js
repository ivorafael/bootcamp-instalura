import { mapValues } from 'lodash';
import { mediaQueries } from './mediaQueries';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const propToStyle = ( propName ) => (
  ( props ) => {
    const propValue = props[ propName ];

    if ( typeof propValue === 'object' ) {
      const mappedMediaQueries = mapValues( propValue, ( value ) => (
        { [ propName ]: value }
      ) );

      return mediaQueries( mappedMediaQueries );
    }

    return {
      [ propName ]: props[ propName ],
    };
  }
);
