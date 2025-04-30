<!-- Section.svelte -->
<script lang="ts">
  export let class_name = '';
  export let spacing: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';
</script>

<section
  class="
    {spacing === 'none' ? '' :
     spacing === 'sm' ? 'py-8' :
     spacing === 'md' ? 'py-12' :
     spacing === 'lg' ? 'py-16' :
     'py-24'} {class_name}"
>
  <slot />
</section> 