import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { GlobalStyles } from '../styles/global';
import * as S from './styles';
import { muiTheme } from '../styles/theming';

function Index() {
  return (
    <MuiThemeProvider theme={ muiTheme }>
      <GlobalStyles />

      <S.Main>
        <S.Toolbar />

        <S.PageHome />
      </S.Main>
    </MuiThemeProvider>
  );
}

export default Index;
