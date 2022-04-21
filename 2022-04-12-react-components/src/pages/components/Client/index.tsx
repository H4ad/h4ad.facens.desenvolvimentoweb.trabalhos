import { ReactElement } from 'react';

import * as S from './styles.module.scss';

export type ClientProps = {
  name: string;
  phone: string;
}

function Client({ name, phone }: ClientProps): ReactElement {
  return (
    <p className={S.clientText}>
      { name } - ({phone})
    </p>
  );
}

export default Client;
