import styled from 'styled-components'

export const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  padding: 0 28px;
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

MenuWrapper.Brand = styled.div`
  justify-self: flex-start;
  margin: 0;
  padding: 0;
  order: 1;
  grid-column: 1;
`;

MenuWrapper.PrimaryNav = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  order: 3;
  width: 100%;
  margin-top: 17px;
  border-top: 1px solid ${ ( { theme } ) => theme.colors.tertiary.light.color };
  border-bottom: 1px solid ${ ( { theme } ) => theme.colors.tertiary.light.color };
  padding: 12px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  grid-column: 1/3;

  a{
    text-align: center;
    display: block;
    text-decoration: none;
    color: ${ ( { theme } ) => theme.colors.tertiary.light.color };
    transition: ${ ( { theme } ) => theme.transition };
    
    &:hover,
    &:focus {
      /* font-weight: 500; */
      color: #070C0E;

    }
  }
`;

MenuWrapper.AuxNav = styled.div`
  order: 2;
  grid-column: 2;
  justify-self: flex-end;
`;
