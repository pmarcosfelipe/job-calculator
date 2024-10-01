<script>
  import { Calculate } from "../scripts/calculate";
  import { app } from "../store";

  $: jobValue = new Calculate($app).formattedJobValue
</script>

<div class="container mx-auto animate-up delay-2 flex justify-between bg-gray-100 py-12 lg:px-72">
  <div class="flex gap-4 flex-col">
    <h2 class="text-3xl font-medium text-gray-600 border-b pb-4 mb-4">Job Data</h2>
    <div class="grid gap-3">
      <label class="text-gray-500 font-medium text-sm" for="name">Job Name</label>
      <input class="px-4 py-2 rounded-sm text-sm" type="text" id="name" name="name" value={$app.currentJob.name} />
    </div>

    <div class="grid gap-3">
      <label class="text-gray-500 font-medium text-sm" for="avatar">How many hours will you dedicate for this job?</label>
      <input class="px-4 py-2 rounded-sm text-sm" id="daily-hours" name="daily-hours" type="number" step="0.5" value={$app.currentJob.dailyHours} />
    </div>

    <div class="grid gap-3">
      <label class="text-gray-500 font-medium text-sm" for="avatar">Estimated time for this job?</label>
      <input class="px-4 py-2 rounded-sm text-sm" id="total-hours" name="total-hours" type="number" bind:value={$app.currentJob.totalHours} />
    </div>
  </div>

  <div class="grid gap-3">
    <img src="/images/money-color.svg" alt="Imagem de Dinheiro" />
    <p>The job value is: <strong>{jobValue}</strong></p>
  </div>
</div>