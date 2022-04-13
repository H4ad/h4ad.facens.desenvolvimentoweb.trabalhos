import { ChangeEvent, FormEvent, useReducer } from 'react';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import * as S from './styles.module.scss';

function useFormReducer(state, action: ChangeEvent<HTMLInputElement>) {
  switch (action.target.name) {
    case 'name':
    case 'address':
    case 'city':
    case 'state':
    case 'phone':
      return {
        ...state,
        [action.target.name]: action.target.value,
      };

    default:
      return state;
  }
}

function validateForm(state) {
  const onError = (message) => {
    toast.error(message);

    return false;
  };

  if (state.name.length < 3) {
    return onError('É necessário digitar um nome com mais de 3 letras.');
  }

  if (state.address.length < 3) {
    return onError('É necessário digitar um endereço com mais de 3 letras.');
  }

  if (state.city.length < 3) {
    return onError('É necessário digitar o nome de uma cidade com mais de 3 letras.');
  }

  if (state.state.length < 3) {
    return onError('É necessário digitar o estado com mais de 3 letras.');
  }

  if (state.phone.length < 3) {
    return onError('É necessário digitar um telefone com mais de 3 letras.');
  }

  return true;
}

const defaultFormState = {
  name: '',
  address: '',
  city: '',
  state: '',
  phone: '',
};

function Home() {
  const [state, onChangeForm] = useReducer(useFormReducer, defaultFormState, (state) => state);

  function onSubmit(event) {
    event.preventDefault();

    const isValid = validateForm(state);

    if (!isValid)
      return;

    event.target.reset();

    toast.success('O formulário foi enviado');
  }

  return (
    <main className={ S.main }>
      <Header title="Cadastro de Clientes" />

      <form onSubmit={ onSubmit }>
        <label>Nome</label>
        <input type="text" placeholder="Digite o nome" name="name" onChange={ onChangeForm } required />

        <label>Endereço</label>
        <input type="text" placeholder="Digite o endereço" name="address" onChange={ onChangeForm } required />

        <label>Cidade</label>
        <input type="text" placeholder="Digite a cidade" name="city" onChange={ onChangeForm } required />

        <label>Estado</label>
        <input type="text" placeholder="Digite o estado" name="state" onChange={ onChangeForm } required />

        <label>Telefone</label>
        <input type="tel" placeholder="Digite o telefone" name="phone" onChange={ onChangeForm } required />

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default Home;
