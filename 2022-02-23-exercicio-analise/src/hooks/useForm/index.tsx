import { ChangeEvent, useMemo, useState } from 'react';

function handleEventChange<T>(preventDefault: boolean, state: T, event: ChangeEvent<HTMLInputElement>): T {
  if (preventDefault)
    event.preventDefault();

  return {
    ...state,
    [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
  };
}

export type UseFormReturn<T> = {
  form: T,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  reset: () => void,
}

export function useForm<T>(preventDefault: boolean = true, defaultState: T = {} as T): UseFormReturn<T> {
  const [form, setForm] = useState(defaultState);

  return useMemo(() => ({
    form,
    onChange: (event) => setForm((state) => handleEventChange(preventDefault, state, event)),
    reset: () => setForm(defaultState),
  }), [form]);
}
