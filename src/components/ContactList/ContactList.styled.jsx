import styled from 'styled-components';

export const List = styled.ul`
  overflow: hidden;
  width: 50vw;
  border-left: 1px solid #ccc;
  padding-bottom: 30px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 20px;
`;