<script lang="ts">
  import { Calculate } from '../scripts/calculate';
  import { Project } from '../scripts/projects';
  import { app } from '../store';

  $: freeHours = new Calculate($app).freeHours;
  $: statusCount = new Calculate($app).projectStatuses;

  function goToProfile() {
    $app.page = 'profile';
  }

  function goToNewProject() {
    $app.currentProject = new Project();
    $app.projects = [...$app.projects, $app.currentProject];
    $app.page = 'project';
  }
</script>

<header class="page-header bg-gray-700 text-white p-4 pb-8">
  <div class="max-w-4xl mx-auto">
    <section id="top" class="animate-up flex justify-between items-center border-b border-b-gray-600 pb-8">
      <h2 class="sr-only">Homepage</h2>
      <img id="logo" src="./images/logo.svg" alt="Logo" />
      <span id="notification" class="flex gap-2">
        <img src="./images/alert-octagon.svg" alt="Alerta" />
        {#if freeHours <= 0}
          You don't have free hours.
        {:else}
          You have {freeHours} {freeHours == 1 ? 'free hour' : 'free hours'} in your day.
        {/if}
      </span>

      <button id="avatar-profile" class="flex items-center gap-4 hover:text-orange-400 transition" on:click={() => goToProfile()}>
        <div class="grid text-end">
          <strong>{$app.user.name}</strong>
          <span class="text-xs">Profile</span>
        </div>
        <img class="w-14 border-2 border-orange-400 rounded-full" src={$app.user.avatar} alt={$app.user.name} />
      </button>
    </section>

    <section id="summary" class="animate-up delay-1 flex justify-between items-center">
      <h2 class="sr-only">Summary</h2>

      <div class="info flex gap-8 py-8">
        <div class="total grid">
          <strong class="text-xl">{statusCount.total}</strong>
          Total
        </div>
        <div class="in-progress grid">
          <strong class="text-xl">{statusCount.progress}</strong>
          On Going
        </div>
        <div class="finished grid">
          <strong class="text-xl">{statusCount.done}</strong>
          Finished
        </div>
      </div>
      <button on:click={() => goToNewProject()} class="button orange flex uppercase gap-4 bg-orange-400 h-fit px-3 py-2 rounded items-center hover:bg-orange-500 transition-all">
        <span class="bg-opacity-20 bg-white rounder p-.5">
          <img src="./images/plus-24.svg" alt="New Project" />
        </span>
        <p class="px-2 text-xs font-bold">New Project</p>
      </button>
    </section>
  </div>
</header>
