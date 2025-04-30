<!-- PreviewIndicator.svelte -->
<script lang="ts">
  export let message: string = 'This is a preview of functionality that will be available in the full release.';
  export let callToAction: string = 'Early access members will receive priority access.';
</script>

<div class="bg-background-surface bg-opacity-50 backdrop-blur-sm border border-accent border-opacity-20 rounded-card p-3 mb-6">
  <div class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
      stroke="currentColor" class="w-5 h-5 text-accent mr-2">
      <path stroke-linecap="round" stroke-linejoin="round" 
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
    <p class="text-sm text-accent font-medium">Preview Mode</p>
  </div>
  <p class="text-text-secondary text-sm mt-1">{message}</p>
  {#if callToAction}
    <p class="text-text-tertiary text-sm mt-1">{callToAction}</p>
  {/if}
</div> 