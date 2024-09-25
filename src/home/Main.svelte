<script>
  import Card from './Card.svelte';

  let jobs = [
    {
      id: 1,
      name: 'Job 1',
      dailyHours: 1,
      totalHours: 4,
      status: 'Encerrado',
      remaining: 1,
      budget: 100,
      createdAt: new Date(),
    },
    {
      id: 2,
      name: 'Job 2',
      dailyHours: 1,
      totalHours: 4,
      status: 'Em andamento',
      remaining: 1,
      budget: 100,
      createdAt: new Date(),
    },
  ];
</script>

<div class="max-w-4xl mx-auto -mt-8">
  <main class="animate-up delay-2">
    <h1 class="sr-only">Trabalhos</h1>

    <div class="cards grid gap-2">
      {#each jobs as job (job.id)}
        <Card {job} />
      {/each}
    </div>
  </main>
</div>
