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

  p {
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  margin: 3rem 0 3rem;
  font-size: 1.5rem;
`;
