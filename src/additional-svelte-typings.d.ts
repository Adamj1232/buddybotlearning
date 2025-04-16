declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    'on:inview_change'?: (event: CustomEvent<{ inView: boolean; entry: IntersectionObserverEntry }>) => void;
  }
} 