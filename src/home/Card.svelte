<script>
  export let job;
</script>

<div
  class="card {job.status} bg-white border border-gray-200 grid grid-cols-[30%_20%_15%_25%_10%] items-center py-6 px-8 rounded
  hover:bg-gradient-to-l hover:from-transparent hover:to-orange-50
  overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-1 before:h-0 before:bg-orange-400 hover:before:h-full before:transition-all"
>
  <div class="name column text-2xl text-gray-700 font-bold">
    {job.name}
  </div>
  <div class="deadline column grid">
    <span class="font-bold text-gray-400 uppercase text-xs">Prazo</span>
    {#if job.status == 'progress'}
      <strong>{job.remaining} dias para a entrega!</strong>
    {:else}
      <strong class="text-red-500">Prazo Encerrado</strong>
    {/if}
  </div>
  <div class="amount column grid">
    <span class="font-bold text-gray-400 uppercase text-xs">Valor</span>
    <strong>R$ {job.budget.toFixed(2).replace('.', ',')}</strong>
  </div>
  <div class={`status badge column px-3 py-2 rounded-full w-fit justify-self-center text-sm ${job.status === 'Encerrado' ? 'bg-red-100' : 'bg-green-100'}`}>
    {#if job.status === 'Encerrado'}
      <div class="text-red-600">Encerrado</div>
    {:else}
      <div class="text-green-600">Em andamento</div>
    {/if}
  </div>
  <div class="actions column flex gap-2">
    <p class="sr-only">Ações</p>
    <button data-id={job.id} class="border border-gray-200 p-2 rounded hover:bg-gray-100 transition-all" title="Editar Job">
      <img class="w-4" src="/images/edit-24.svg" alt="Editar Job" />
    </button>
    <button data-id={job.id} class="border border-gray-200 p-2 rounded hover:bg-red-100 transition-all" title="Excluir Job">
      <img class="w-4" src="/images/trash-24.svg" alt="Excluir Job" />
    </button>
  </div>
</div>
