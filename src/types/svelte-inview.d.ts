declare module 'svelte-inview' {
  export function inview(node: HTMLElement, options?: {
    unobserveOnEnter?: boolean;
    rootMargin?: string;
  }): {
    destroy(): void;
  };
} 