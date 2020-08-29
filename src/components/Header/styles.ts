import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.header`
  background: ${colors.grey};
  height: 6rem;

  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconContent = styled.div`
  img {
    width: 13rem;
  }

  @media only screen and (max-width: 742px) {
    img {
      width: 10rem;
      margin-right: 1rem;
    }
  }

  @media only screen and (max-width: 600px) {
    img {
      width: 9rem;
      margin-right: 1rem;
    }
  }

  @media only screen and (max-width: 590px) {
    img {
      display: none;
    }
  }
`;

export const MenuContent = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .selected {
    border-bottom: 0.3rem solid ${colors.blue};
  }

  a {
    color: ${colors.white};
    text-decoration: none;
    font-size: 1.3rem;
    transition: opacity 0.2s;

    & + a {
      margin-left: 2rem;
    }

    &:hover {
      opacity: 0.6;
    }
  }

  @media only screen and (max-width: 742px) {
    a {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 600px) {
    a {
      font-size: 0.9rem;
    }
  }
`;
