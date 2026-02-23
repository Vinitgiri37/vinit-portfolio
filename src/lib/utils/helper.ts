import tailwindConfig from '../../../tailwind.config';
import { BreakpointType, ProjectType } from '../types';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import resolveConfig from 'tailwindcss/resolveConfig';

const fullConfig = resolveConfig(tailwindConfig);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns the breakpoint's width
 * @param breakpoint - Configured breakpoints: xs sm md lg xl 2xl
 * @returns width - Width of the breakpoint
 */
export const getBreakpointsWidth = (breakpoint: BreakpointType): number => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const value = fullConfig?.theme?.screens?.[breakpoint];

  if (!value || typeof value !== 'string') return 0;

  return parseInt(value.replace('px', ''), 10);
};

/**
 * Returns a unique id
 */
export const getId = (): string =>
  `id${Math.random().toString(16).slice(2)}`;

/**
 * Returns the projects sorted by year (descending)
 */
export const sortByYear = <T extends { year: number }>(
  projects: T[]
): T[] => {
  return [...projects].sort((a, b) => b.year - a.year);
};

/**
 * Removes given keys from object
 */
export const removeKeys = <T extends Record<string, any>>(
  object: T,
  keys: Array<keyof T>
): void => {
  keys.forEach((field) => {
    delete object[field];
  });
};