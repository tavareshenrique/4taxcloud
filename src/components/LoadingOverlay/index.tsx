import React from 'react';

import SiedorLogoTranspImg from '~/assets/img/seidor-logo-transp.png';

import { Container, Content } from './styles';

const LoadingOverlay: React.FC = () => (
  <Container data-testid="loading-overlay">
    <Content>
      <img src={SiedorLogoTranspImg} alt="Seidor Loading" />
      <h3>Carregando...</h3>
    </Content>
  </Container>
);

export default LoadingOverlay;
