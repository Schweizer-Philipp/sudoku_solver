import styled from 'styled-components'
import Sudoku from './Sudoku';

const LayoutWrapper = styled.div`
  background-color: #222;
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  overflow: hidden;
  z-index: -2;
`;

const SpaceAnimation = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  filter: blur(calc(500px / 5));
  background-image: linear-gradient(rgba(55, 235, 169, 0.85), #5b37eb);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  z-index: -1;
`;

const Headline = styled.h1`
  color: #FFF;
  text-align: center;
  font-family: 'lato',sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
`
;


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <LayoutWrapper>
      <SpaceAnimation>
      </SpaceAnimation>
      <ContentWrapper>
      <Headline>SUDOKU-SOLVER</Headline>
      <Sudoku size={9}></Sudoku>
      </ContentWrapper>
    </LayoutWrapper>
  );
}

export default App;
