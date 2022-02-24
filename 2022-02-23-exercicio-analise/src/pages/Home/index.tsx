import InputAdornment from '@mui/material/InputAdornment';
import PhoneRounded from '@mui/icons-material/PhoneRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FoodBankRounded from '@mui/icons-material/FoodBankRounded';
import CardTravelRounded from '@mui/icons-material/CardTravelRounded';
import { HTMLAttributes, ReactElement, useCallback, useMemo, useState } from 'react';

import * as S from './styles';
import { useForm } from '../../hooks/useForm';
import { Additionals, Combos, Deliver, FormPayload } from './data';
import { validatePayload } from './functions';

function Home(props: HTMLAttributes<HTMLElement>): ReactElement {
  const { form, onChange, reset } = useForm<FormPayload>(true, {
    phone: '',
    selectedCombo: '',
    additionals: [],
    name: '',
    deliver: '',
  });

  const [price, setPrice] = useState(0);
  const [receipt, setReceipt] = useState('');

  const [touchedInputs, setTouchedInputs] = useState({} as Record<keyof FormPayload, boolean>);

  const onTounchInput = useCallback(
    (event: any) => setTouchedInputs(props => {
      const name = event.currentTarget?.dataset.name || event?.target?.name;

      console.log(event);
      console.log(name);

      if (!name)
        return props;

      return props[name]
        ? props
        : ({ ...props, [name]: true });
    }),
    [setTouchedInputs],
  );

  const errors = useMemo(() => validatePayload(touchedInputs, form), [touchedInputs, form]);

  const touchedAllRequired = useMemo(() => Object.keys(touchedInputs).length >= 4, [touchedInputs]);
  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function resetOrder(): void {
    reset();

    setTouchedInputs({} as Record<keyof FormPayload, boolean>);

    setPrice(0);
    setReceipt('');
  }

  function calculatePrice(): void {
    const deliver = Deliver.find(consumable => consumable.id === form.deliver);
    const additionals = Additionals.filter(consumable => form.additionals.includes(consumable.id));
    const combo = Combos.find(consumable => consumable.id === form.selectedCombo);

    const totalPrice = [
      ...additionals,
      deliver,
      combo,
    ].reduce((acc, consumable) => acc + (consumable?.price || 0), 0);

    setPrice(totalPrice);
  }

  function makeReceipt(): void {
    const deliver = Deliver.find(consumable => consumable.id === form.deliver);
    const additionals = Additionals.filter(consumable => form.additionals.includes(consumable.id));
    const combo = Combos.find(consumable => consumable.id === form.selectedCombo);

    const receipt = `Recibo:\n` +
      `Nome: ${ form.name }\n` +
      `Telefone: ${ form.phone }\n` +
      `Combo: ${ combo?.label }\n` +
      `Adicionais: ${ additionals?.map(consumable => consumable.label).join(', ') || 'Sem adicionais' }\n` +
      `Tipo de Entrega: ${ deliver?.label }\n` +
      `Total: R$ ${ price.toFixed(2) }`;

    setReceipt(receipt);
  }

  return (
    <S.Section { ...props }>
      <S.MuiCard variant="outlined">
        <S.FormTitle mt={ 1 } mb={ 3 } align="center" typography="h4">Preencha as informações abaixo.</S.FormTitle>

        <S.MuiDivider />

        <S.MuiGrid mt={ 2 } spacing={ 3 } container>
          <S.MuiGrid item xs={ 4 }>
            <S.MuiTextField fullWidth variant="outlined"
                            data-name="phone"
                            name="phone"
                            label="Telefone"
                            inputMode="tel"
                            placeholder="(00) 90000-0000"
                            value={ form.phone }
                            onClick={ onTounchInput }
                            error={ !!errors.phone }
                            helperText={ errors.phone }
                            onChange={ onChange }
                            required
                            InputProps={ {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PhoneRounded />
                                </InputAdornment>
                              ),
                            } } />
          </S.MuiGrid>

          <S.MuiGrid item xs={ 8 }>
            <S.MuiTextField fullWidth variant="outlined"
                            data-name="name"
                            name="name"
                            label="Nome do Cliente"
                            placeholder="Digite o nome do cliente"
                            value={ form.name }
                            onClick={ onTounchInput }
                            error={ !!errors.name }
                            helperText={ errors.name }
                            onChange={ onChange }
                            required
                            InputProps={ {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <AccountCircle />
                                </InputAdornment>
                              ),
                            } } />
          </S.MuiGrid>

          <S.MuiGrid item xs={ 3 }>
            <S.MuiTextField fullWidth variant="outlined"
                            data-name="selectedCombo"
                            name="selectedCombo"
                            select
                            label="Combos"
                            value={ form.selectedCombo }
                            onChange={ onChange }
                            onBlur={ onTounchInput }
                            error={ !!errors.selectedCombo }
                            helperText={ errors.selectedCombo || 'Selecione o seu combo' }
                            required
                            InputProps={ {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <FoodBankRounded />
                                </InputAdornment>
                              ),
                            } }>
              { Combos.map(consumable => (
                <S.MuiMenuItem key={ consumable.id } value={ consumable.id }>{ consumable.label }</S.MuiMenuItem>
              )) }
            </S.MuiTextField>
          </S.MuiGrid>

          <S.MuiGrid item xs={ 6 }>
            <S.MuiTextField fullWidth variant="outlined"
                            name="additionals"
                            select
                            label="Adicionais"
                            helperText="Selecione os adicionais"
                            value={ form.additionals }
                            onChange={ onChange }
                            SelectProps={ {
                              multiple: true,
                            } }
                            InputProps={ {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <FoodBankRounded />
                                </InputAdornment>
                              ),
                            } }>
              { Additionals.map(consumable => (
                <S.MuiMenuItem key={ consumable.id } value={ consumable.id }>{ consumable.label }</S.MuiMenuItem>
              )) }
            </S.MuiTextField>
          </S.MuiGrid>

          <S.MuiGrid item xs={ 3 }>
            <S.MuiTextField fullWidth variant="outlined"
                            data-name="deliver"
                            name="deliver"
                            select
                            label="Entrega"
                            value={ form.deliver }
                            onChange={ onChange }
                            onBlur={ onTounchInput }
                            error={ !!errors.deliver }
                            helperText={ errors.deliver || 'Selecione o tipo da entrega' }
                            required
                            InputProps={ {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <CardTravelRounded />
                                </InputAdornment>
                              ),
                            } }>
              { Deliver.map(consumable => (
                <S.MuiMenuItem key={ consumable.id } value={ consumable.id }>{ consumable.label }</S.MuiMenuItem>
              )) }
            </S.MuiTextField>
          </S.MuiGrid>

          <S.ButtonGrid item xs={ 12 }>
            <S.MuiStack spacing={ 2 } direction="row">
              <S.MuiButton variant="contained" color="success" disabled={ hasErrors || !touchedAllRequired } onClick={ calculatePrice }>Calcular</S.MuiButton>
              <S.MuiButton variant="outlined" color="warning" onClick={ resetOrder }>Novo Pedido</S.MuiButton>
              <S.MuiButton variant="contained" disabled={ hasErrors || !price } onClick={ makeReceipt }>Recibo</S.MuiButton>
            </S.MuiStack>
          </S.ButtonGrid>

          <S.MuiGrid item xs={ 12 }>
            <S.MuiTextField fullWidth variant="filled"
                            label="Total a pagar"
                            disabled
                            value={ price }
                            InputProps={ {
                              endAdornment: (<InputAdornment position="end">reais</InputAdornment>),
                            } } />
          </S.MuiGrid>

          <S.MuiGrid item xs={ 12 }>
            <S.MuiTextField fullWidth variant="filled"
                            label="Recibo"
                            multiline
                            rows={ 4 }
                            disabled
                            value={ receipt } />
          </S.MuiGrid>
        </S.MuiGrid>
      </S.MuiCard>
    </S.Section>
  );
}

export default Home;
