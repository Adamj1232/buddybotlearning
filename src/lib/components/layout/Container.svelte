<!-- Container.svelte -->
<script lang="ts">
  export let as: keyof HTMLElementTagNameMap = 'div';
  export let class_name = '';
  export let max_width: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'xl';
</script>

<svelte:element
  this={as}
  class="mx-auto px-4 {max_width === 'full' ? 'w-full' : 
    max_width === 'sm' ? 'max-w-screen-sm' :
    max_width === 'md' ? 'max-w-screen-md' :
    max_width === 'lg' ? 'max-w-screen-lg' :
    'max-w-screen-xl'} {class_name}"
>
  <slot />
</svelte:element> 