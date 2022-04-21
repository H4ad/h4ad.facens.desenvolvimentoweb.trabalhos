import { ReactElement } from 'react';

import * as S from './styles.module.scss';

export type UserProps = {
  firstName: string;
  email: string;
  avatar: string;
}

function User({ firstName, email, avatar }: UserProps): ReactElement {
  return (
    <div className={S.user}>
      <h4>{ firstName }</h4>
      <p>{ email }</p>

      <img src={avatar} />
    </div>
  );
}

export default User;
