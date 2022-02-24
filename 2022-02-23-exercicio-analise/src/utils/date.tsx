import { leftPad } from './left-pad';

export function dateToTimeString(date: Date): string {
  return `${ leftPad(date.getHours(), 2) }:${ leftPad(date.getMinutes(), 2) }:${ leftPad(date.getSeconds(), 2) }`;
}
