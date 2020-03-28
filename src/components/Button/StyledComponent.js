import styled from 'styled-components'

export const Button = styled.span`
  position: relative;
  cursor: pointer;
  width: 295px;
  height: 60px;

  background: ${props => props.background || '#FC6F20'};
  border-radius: 32px;
  border: 2px solid black;
  border-color: ${props => props.borderColor || 'inherit'};

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 40px;

  display: flex;

  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.3s;

  color: ${props => props.color || '#FFFFFF'};

  :focus {
    outline: none;
  }

  :hover {
    border-color: #56ADFE;
  }
`

export const Icon = styled.img`
  position: absolute;
  width: 40px;
  left: 20px;
`
