import { DiAndroid } from 'react-icons/di';
import Clock from '../Clock';
import * as S from './styles.module.scss';

function Header({ title }: { title: string }) {
  return (
    <header className={ S.header }>
      <DiAndroid color="#00FF22" />
      <h1>{ title }</h1>

      <Clock />
    </header>
  );
}

export default Header;
