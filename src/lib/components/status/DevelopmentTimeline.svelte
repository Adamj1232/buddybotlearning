<!-- DevelopmentTimeline.svelte -->
<script lang="ts">
  type TimelineStep = {
    title: string;
    date: string;
    status: 'completed' | 'current' | 'upcoming';
    progress?: number;
  };

  const timeline: TimelineStep[] = [
    {
      title: 'Design Phase',
      date: 'Completed January 2024',
      status: 'completed'
    },
    {
      title: 'Development',
      date: 'In Progress',
      status: 'current',
      progress: 65
    },
    {
      title: 'Beta Testing',
      date: 'Starting Summer 2024',
      status: 'upcoming'
    },
    {
      title: 'Full Release',
      date: 'Fall 2024',
      status: 'upcoming'
    }
  ];
</script>

<div class="space-y-4">
  <h3 class="text-h3" id="timeline-heading">Development Timeline</h3>
  <div class="relative" role="region" aria-labelledby="timeline-heading">
    <!-- Timeline line -->
    <div class="absolute top-4 left-4 h-full w-0.5 bg-border" aria-hidden="true"></div>
    
    <!-- Timeline steps -->
    <ol class="space-y-8">
      {#each timeline as step, index}
        <li class="flex items-start">
          <div 
            class="flex-shrink-0 h-8 w-8 rounded-full border-2 
              {step.status === 'completed' ? 'border-accent bg-accent' : 
               step.status === 'current' ? 'border-accent bg-background' :
               'border-border bg-background'} 
            flex items-center justify-center relative z-10"
            aria-hidden="true"
          >
            {#if step.status === 'completed'}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" 
                stroke="currentColor" class="w-4 h-4 text-background" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            {:else if step.status === 'current'}
              <div class="h-2 w-2 bg-accent rounded-full" aria-hidden="true"></div>
            {/if}
          </div>
          
          <div class="ml-4 flex-grow">
            <div class="flex items-center justify-between">
              <h4 class="font-medium text-text-primary">{step.title}</h4>
              <span class="text-small text-text-tertiary">{step.date}</span>
            </div>
            
            {#if step.progress !== undefined}
              <div 
                class="mt-2 h-1 w-full bg-border rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={step.progress}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="{step.title} progress"
              >
                <div 
                  class="h-full bg-accent" 
                  style="width: {step.progress}%"
                  aria-hidden="true"
                ></div>
              </div>
            {/if}
          </div>
        </li>
      {/each}
    </ol>
  </div>
</div> 