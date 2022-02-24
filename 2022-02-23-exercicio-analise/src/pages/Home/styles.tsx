import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;

export const MuiCard = styled(Card)`
  width: 80%;
  max-width: 1024px;

  padding: 1.5rem;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const FormTitle = styled(Typography)``;

export const MuiDivider = styled(Divider)``;
export const MuiGrid = styled(Grid)``;
export const ButtonGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`;
export const MuiStack = styled(Stack)``;
export const MuiTextField = styled(TextField)``;
export const MuiSelect = styled(Select)``;
export const MuiMenuItem = styled(MenuItem)``;
export const MuiFormControl = styled(FormControl)``;
export const MuiInputLabel = styled(InputLabel)``;
export const MuiButton = styled(Button)``;
