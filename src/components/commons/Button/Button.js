import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { TextStylesVariants } from '../../foundation/Text/Text';
import mediaQueries from '../../../theme/utils/mediaQueries';
import propToStyle from '../../../theme/utils/propToStyle';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const ButtonDefault = css`
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
`;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const ButtonMediaQueries = mediaQueries({
  xs: css`
      ${TextStylesVariants.smallestException}
    `,

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  sm: css`
      ${TextStylesVariants.paragraph1}
    `,
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: ${({ theme }) => theme.transition};

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

  ${propToStyle('margin')}
  ${propToStyle('display')}

  &:hover,
  &:focus {
      opacity: .5;
  }

  ${ButtonMediaQueries}
`;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default Button;
