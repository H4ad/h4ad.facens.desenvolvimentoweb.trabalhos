import { useQuery } from 'react-query';
import User from '../components/User';
import * as S from './styles.module.scss';

function Home() {
  const { data: users, isLoading } = useQuery(['users'], () => fetch('https://reqres.in/api/users').then(res => res.json()));

  return (
    <main className={ S.main }>
      <h1>Lista de Clientes</h1>
      <h2>Dica: passe o mouse por cima do card.</h2>


      { isLoading && <p>Carregando...</p> }

      <section>
        { users?.data?.map(user => (
          <User key={user.email} avatar={user.avatar} email={user.email} firstName={user.first_name} />
        )) }
      </section>
    </main>
  );
}

export default Home;
