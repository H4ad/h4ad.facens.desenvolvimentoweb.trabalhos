import { HTMLAttributes, ReactElement, useEffect, useState } from 'react';

import * as S from './styles';
import { dateToTimeString } from '../../utils/date';

function CClock(props: HTMLAttributes<HTMLElement>): ReactElement {
  const [date, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <S.Time { ...props } dateTime={ date.toISOString() }>
      { dateToTimeString(date) }
    </S.Time>
  );
}

export default CClock;
