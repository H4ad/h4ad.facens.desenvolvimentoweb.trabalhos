import { useEffect, useRef } from 'react';
import * as S from './styles.module.scss';

const intl = new Intl.DateTimeFormat('pt-BR', {
  hour12: false,
  hour: '2-digit',
  day: '2-digit',
  minute: '2-digit',
  month: 'long',
  second: '2-digit',
  year: 'numeric',
  weekday: 'long',
  formatMatcher: 'best fit',
});

function Clock() {
  const refText = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (refText.current === null)
        return;

      refText.current.innerText = intl.format(new Date());
    }, 1_000);

    return () => clearInterval(intervalId);
  });

  return <span className={ S.clock } ref={ refText } />;
}

export default Clock;
