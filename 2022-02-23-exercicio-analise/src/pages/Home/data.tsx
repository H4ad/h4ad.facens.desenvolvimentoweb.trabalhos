export type Consumable = { label: string, id: string, price: number };
export type FormPayload = { phone: string, name: string, selectedCombo: string, additionals: string[], deliver: string };

export const Combos: Consumable[] = [
  { id: 'x-veggie', label: 'X-Veggie', price: 100 },
  { id: 'x-bacon', label: 'X-Bacon', price: 20 },
  { id: 'x-salada', label: 'X-Salada', price: 70 },
  { id: 'x-batata', label: 'X-Batata', price: 20 },
  { id: 'x-tudão', label: 'X-Tudão', price: 50 },
];

export const Additionals: Consumable[] = [
  { id: 'bacon', label: 'Bacon', price: 4 },
  { id: 'cheddar', label: 'Cheddar', price: 4 },
  { id: 'picles', label: 'Picles', price: 4 },
  { id: 'doritos', label: 'Doritos', price: 4 },
  { id: 'crosta-de-parmesão', label: 'Crosta de Parmesão', price: 6 },
];

export const Deliver: Consumable[] = [
  { id: 'viagem', label: 'Para Viagem', price: 10 },
  { id: 'balcão', label: 'Balcão', price: 0 },
];

