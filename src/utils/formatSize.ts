/* format sizes (height/width) */

export function formatSize(value?: string | number): string | undefined {
   if (value === undefined || value === null) return undefined
   return typeof value === 'number' ? `${value}px` : value
}