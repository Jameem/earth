import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import './App.css';
import styled from 'styled-components';
import { Earth } from './components/earth';
import { TopSection } from './components/top-section';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <TopSection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

export default App;
