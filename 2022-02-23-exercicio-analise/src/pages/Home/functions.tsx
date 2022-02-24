import { FormPayload } from './data';

export function validatePayload(touchedInputs: Record<keyof FormPayload, boolean>, form: FormPayload): Partial<Record<keyof FormPayload, string | undefined>> {
  let errors: Partial<Record<keyof FormPayload, string | undefined>> = {};

  if (touchedInputs.name && !form.name)
    errors.name = 'É necessário digitar o nome.';

  if (touchedInputs.phone && !form.phone)
    errors.phone = 'É necessário digitar o telefone.';

  if (touchedInputs.selectedCombo && !form.selectedCombo)
    errors.selectedCombo = 'É necessário selecionar um combo.';

  if (touchedInputs.deliver && !form.deliver)
    errors.deliver = 'É necessário selecionar a entrega.';

  return errors;
}
