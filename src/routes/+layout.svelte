<script lang="ts">
  import '../app.css';
  import Navigation from '../components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Navigation />

<main class="pt-16">
  <slot />
</main>

<Footer /> 