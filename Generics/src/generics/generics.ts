export function functionGenerics<T>(argument: T): T {
    return argument;
}

export const genericsArrow = <T>(argument: T) => {
    return argument;
}

export const genericsArrow1 = <T>(argument: T) => argument;

// More examples of generics

export function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// Another example with multiple types

export function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}