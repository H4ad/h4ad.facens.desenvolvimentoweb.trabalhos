import styled from '@emotion/styled';
import CToolbar from '../components/CToolbar';
import Home from './Home';

export const Main = styled.main`
  height: 100vh;
  width: 100vw;

  background-color: ${ props => props.theme.palette.background.default };
`;

export const Toolbar = styled(CToolbar)`
  height: 7rem;
`;

export const PageHome = styled(Home)`
  height: calc(100% - 7rem);
`;
