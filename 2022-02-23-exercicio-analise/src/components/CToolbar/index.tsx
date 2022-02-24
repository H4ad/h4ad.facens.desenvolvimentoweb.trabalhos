import { HTMLAttributes, ReactElement } from 'react';

import * as S from './styles';

function CToolbar(props: HTMLAttributes<HTMLElement>): ReactElement {
  return (
    <S.Container {...props}>
      <S.Title typography="h2">Hamburgueria XGostoso</S.Title>

      <S.Clock />
    </S.Container>
  );
}

export default CToolbar;
