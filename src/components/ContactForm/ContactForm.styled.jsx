import styled from 'styled-components';

export const FormStyled = styled.form`
  float: left;
  margin-right: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  display: block;
  margin: 0 0 15px 0;
  padding: 10px;
  width: 250px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 30px;
  background: #f8a035;
  color: #fff;
  border: none;
  border-radius: 4px;
  transition: 250ms;
  &:hover {
    background: #dd7f0c;
  }
`;

// export const ErrorNotify = styled(ErrorMessage)`
//   color: red;
//   font-size: 12px;
// `;