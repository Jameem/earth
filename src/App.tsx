import { Canvas } from '@react-three/fiber';

import './App.css';
import styled from 'styled-components';
import { Earth } from './components/earth';
import { TopSection } from './components/top-section';
import { Spinner } from './components/Spinner';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Spinner />
      <TopSection />
      <Canvas>
        <Earth />
      </Canvas>
    </Wrapper>
  );
}

export default App;
