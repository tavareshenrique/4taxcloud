import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  background: ${colors.white};

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 1rem 15rem;
  align-self: center;

  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    margin: 1rem 10rem;
  }

  @media only screen and (max-width: 1035px) {
    margin: 1rem 5rem;
  }

  @media only screen and (max-width: 875px) {
    margin: 1rem 2rem;
  }

  @media only screen and (max-width: 775px) {
    margin: 1rem 1rem;
  }

  @media only screen and (max-width: 670px) {
    margin: 1rem 0;
    padding: 1rem 0.5rem;
  }

  @media only screen and (max-width: 570px) {
    margin: 1rem 0;
    padding: 1rem 0.5rem;
  }

  @media only screen and (max-width: 500px) {
    margin: 1rem 0;
    padding: 1rem 0.5rem;
  }

  @media only screen and (max-width: 375px) {
    margin: 1rem 0;
    padding: 1rem 0.5rem;
  }

  @media only screen and (max-width: 320px) {
    margin: 1rem 0;
    padding: 1rem 0.3rem;
  }
`;
