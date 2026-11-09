/// <reference types="vite/client" />

declare module '*.sass' {
   const content: Record<string, string>
   export default content
}

declare module '*.scss' {
   const content: Record<string, string>
   export default content
}

declare module '*.css' {
   const content: Record<string, string>
   export default content
}