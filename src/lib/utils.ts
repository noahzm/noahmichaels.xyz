// Import clsx for conditional className joining and type for type safety
import { clsx, type ClassValue } from "clsx";
// Import tailwind-merge to intelligently merge Tailwind CSS classes
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine and merge class names.
 * Uses clsx for conditional logic and tailwind-merge to resolve conflicts.
 * @param inputs - List of class values (strings, arrays, objects)
 * @returns A single merged className string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
