import styled, { keyframes } from 'styled-components';

const pendulum = keyframes`
  0%, 100% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(-45deg);
  }
`;

const walking = keyframes`
  0% {
    background-position: 0% 100%;
  }
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  top: 50%;
  left: 50%;

  img {
    animation: ${pendulum} 2s linear infinite;
  }

  h3 {
    margin-top: 0.5rem;

    text-align: center;
    color: transparent;
    background-image: linear-gradient(
      to right,
      #50b748,
      #025687,
      #ffffff,
      #025687
    );
    background-clip: text;
    -webkit-background-clip: text;
    animation: ${walking} 20s linear infinite;
    background-size: 1000%;
  }
`;
