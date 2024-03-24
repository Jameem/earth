import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #6b13cf;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  position: absolute;
  bottom: 10px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export function Spinner() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);

  return show ? <StyledSpinner /> : <></>;
}
