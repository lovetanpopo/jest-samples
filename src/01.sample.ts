// Node Target Mapping
// https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping

export const funcA = (): number => funcB();
export const funcB = (): number => funcC();
export const funcC = (): number => 100;