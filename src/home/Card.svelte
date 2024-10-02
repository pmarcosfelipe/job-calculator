<script lang="ts">
  import { Calculate } from '../scripts/calculate';
  import { deboucedAutoSave } from '../scripts/utils';
  import { app } from '../store';
  import { Status } from '../types/store.types';

  export let project: any;
  $app.currentProject = project;

  let formattedProjectValue = new Calculate($app).formattedProjectValue;

  function goToProjectById() {
    const currentProject = $app.projects.find((j: any) => j.id == project.id);
    $app.currentProject = currentProject;
    $app.page = 'project';
  }

  function handleDelete() {
    if (confirm('Are you sure you want to delete this project?')) {
      $app.projects = $app.projects.filter((j: any) => j.id !== project.id);
    }
  }

  $: deboucedAutoSave($app);
</script>

<div
  class="card {project.status} bg-white border border-gray-200 grid grid-cols-[30%_20%_15%_25%_10%] items-center py-6 px-8 rounded
  hover:bg-gradient-to-l hover:from-transparent hover:to-orange-50
  overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-1 before:h-0 before:bg-orange-400 hover:before:h-full before:transition-all"
>
  <div class="name column text-2xl text-gray-700 font-bold">
    {project.name}
  </div>
  <div class="deadline column grid">
    <span class="font-bold text-gray-400 uppercase text-xs">Deadline</span>
    {#if project.status == Status.ONGOING}
      <strong>{project.remainingDays} {project.remainingDays === 1 ? 'day' : 'days'} to release!</strong>
    {:else}
      <strong class="text-red-500">Deadline finished!</strong>
    {/if}
  </div>
  <div class="amount column grid">
    <span class="font-bold text-gray-400 uppercase text-xs">Project Value</span>
    <strong>{formattedProjectValue}</strong>
  </div>
  <div class={`status badge column px-3 py-2 rounded-full w-fit justify-self-center text-sm ${project.status === Status.DONE ? 'bg-red-100' : 'bg-green-100'}`}>
    {#if project.status === Status.DONE}
      <div class="text-red-600">{Status.DONE.toUpperCase()}</div>
    {:else}
      <div class="text-green-600">{Status.ONGOING.toUpperCase()}</div>
    {/if}
  </div>
  <div class="actions column flex gap-2">
    <p class="sr-only">Actions</p>
    <button on:click={() => goToProjectById()} class="border border-gray-200 p-2 rounded hover:bg-gray-100 transition-all" title="Edit Project">
      <img class="w-4" src="/images/edit-24.svg" alt="Edit Project" />
    </button>
    <button on:click={() => handleDelete()} class="border border-gray-200 p-2 rounded hover:bg-red-100 transition-all" title="Delete Project">
      <img class="w-4" src="/images/trash-24.svg" alt="Delete Project" />
    </button>
  </div>
</div>
