export function leftPad(num: number, pad: number): string {
  let result = num.toString();

  while (result.length < pad)
    result = '0' + result;

  return result;
}
