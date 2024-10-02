<script>
  import { app } from '../store';
  import Card from './Card.svelte';
</script>

<div class="container mx-auto -mt-8 lg:px-72">
  <main class="animate-up delay-2">
    <h1 class="sr-only">Projects</h1>

    <div class="cards grid gap-2">
      {#each $app.projects as project (project.id)}
        <Card {project} />
      {/each}
    </div>
  </main>
</div>
