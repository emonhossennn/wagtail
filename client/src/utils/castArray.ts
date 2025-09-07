/**
 * Converts the provided args or single argument to an array.
 * Even if not originally supplied as one.
 */
export const castArray = <T>(...args: T[]): T[] => args.flat(1) as T[];
