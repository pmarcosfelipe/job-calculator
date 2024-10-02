<script>
  import { Calculate } from '../scripts/calculate';
  import { deboucedAutoSave } from '../scripts/utils';
  import { app } from '../store';

  $: projectValue = new Calculate($app).formattedProjectValue;

  $: deboucedAutoSave($app);
</script>

<div class="container mx-auto animate-up delay-2 flex justify-between bg-gray-100 py-12 lg:px-72">
  <div class="flex gap-4 flex-col">
    <h2 class="text-3xl font-medium text-gray-600 border-b pb-4 mb-4">Project Data</h2>
    <div class="grid gap-3">
      <label class="text-gray-500 font-medium text-sm" for="name">Project Name</label>
      <input class="px-4 py-2 rounded-sm text-sm" type="text" id="name" name="name" bind:value={$app.currentProject.name} />
    </div>

    <div class="grid gap-3">
      <label class="text-gray-500 font-medium text-sm" for="avatar">How many hours will you dedicate for this project?</label>
      <input class="px-4 py-2 rounded-sm text-sm" id="daily-hours" name="daily-hours" type="number" bind:value={$app.currentProject.dailyHours} />
    </div>

    <div class="grid gap-3">
      <label class="text-gray-500 font-medium text-sm" for="avatar">Estimated time for this project?</label>
      <input class="px-4 py-2 rounded-sm text-sm" id="total-hours" name="total-hours" type="number" bind:value={$app.currentProject.totalHours} />
    </div>
  </div>

  <div class="grid gap-3">
    <img src="/images/money-color.svg" alt="Imagem de Dinheiro" />
    <p>The project value is: <strong>{projectValue}</strong></p>
  </div>
</div>
