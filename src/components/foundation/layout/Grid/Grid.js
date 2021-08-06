import styled, { css } from 'styled-components';
import { mapValues } from 'lodash';
import mediaQueries from '../../../../theme/utils/mediaQueries';
import propToStyle from '../../../../theme/utils/propToStyle';

const Grid = {

};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const GridContainer = styled.div`
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;
  margin-right: auto;
  margin-left: auto;

  ${mediaQueries({
    xs: css`
      max-width: initial;
      padding-right: 28px;
      padding-left: 28px;
    `,
    sm: css`
      max-width: 576px; 
    `,
    md: css`
      max-width: 768px;
      padding-right: 16px;
      padding-left: 16px; 
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}

  ${propToStyle('marginTop')}
`;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const GridRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
`;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const colValueMediaQueries = ({ value }) => {
  const mapped = mapValues(value, (cols) => ({
    flex: `0 0 ${(100 * cols) / 12}%`,
    maxWidth: `${(100 * cols) / 12}%`,
  }));

  return mediaQueries(mapped);
};

const colValue = css`
  ${({ value }) => {
    if (typeof value === 'number') {
      return css`
        flex: 0 0 ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `;
    }

    return colValueMediaQueries;
  }}
`;
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

const colOffsetMediaQueries = ({ offset }) => {
  const mapped = mapValues(offset, (cols) => ({
    marginLeft: `${(100 * cols) / 12}%`,
  }));

  return mediaQueries(mapped);
};

const colOffset = css`
  ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
        margin-left: ${(100 * offset) / 12}%;
      `;
    }

    return colOffsetMediaQueries;
  }}
`;
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

const GridCol = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${colValue}

  ${colOffset}
  
  ${propToStyle('display')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexDirection')}
`;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Grid.Container = GridContainer;
Grid.Row = GridRow;
Grid.Col = GridCol;
export default Grid;
