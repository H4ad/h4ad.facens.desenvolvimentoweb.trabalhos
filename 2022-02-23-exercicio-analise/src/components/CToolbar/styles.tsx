import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import CClock from '../CClock';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid ${ props => props.theme.palette.primary.main };

  height: 7rem;

  color: ${ props => props.theme.palette.primary.main };
`;

export const Title = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const Clock = styled(CClock)`
  margin-top: .5rem;
`;
