<!-- StatusBadge.svelte -->
<script lang="ts">
  export let type: 'coming-soon' | 'preview' | 'beta' = 'coming-soon';
  export let label: string = type === 'coming-soon' ? 'Coming Soon' : type === 'preview' ? 'Preview' : 'Beta';
  export let ariaLabel: string = `Status: ${label}`;
</script>

<span 
  class="status-badge-{type}"
  role="status"
  aria-label={ariaLabel}
>
  {label}
</span> 