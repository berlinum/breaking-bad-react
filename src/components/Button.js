import styled from '@emotion/styled';

const Button = styled.button`
  width: 30vw;
  min-width: 100px;
  height: auto;
  margin: 0 2vw;
  padding: 0;
  background-color: #807759;
  border-width: 0;
  outline: none;
  font-family: typewriter;
  font-size: clamp(1rem, 7vw, 3rem);
  color: #e6e0cf;
  box-shadow: 10px 6px 15px 0 rgba(0, 0, 0, 0.2),
    10px 6px 22px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  transition-duration: 0.6s;
  &:hover {
    background: #e6e0cf;
    color: #0d0d0d;
  }
  &btn:active {
    background: lighten(#e6e0cf, 50%);
  }
`;

export default Button;
