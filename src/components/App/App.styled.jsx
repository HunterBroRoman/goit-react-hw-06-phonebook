import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 15px 30px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const H1 = styled.h1`
  color:#333;
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: bold;
`;

export const H2 = styled.h2`
  color:#333;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`;