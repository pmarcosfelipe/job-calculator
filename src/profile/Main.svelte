<script>
  import { app } from '../store';
  import { Calculate } from '../scripts/calculate';
  import { deboucedAutoSave } from '../scripts/utils';

  $: formattedValueHour = new Calculate($app).formattedValueHour;

  $: deboucedAutoSave($app);
</script>

<div class="container mx-auto animate-up delay-2 flex justify-between bg-gray-100 py-12 lg:px-72">
  <aside class="card max -w-80 bg-white border border-gray-200 p-16">
    <img class="border-orange-400 rounded-full border-4" src={$app.user.avatar} alt={$app.user.name} />
    <h2 class="text-2xl font-medium text-gray-600 text-center mt-4">{$app.user.name}</h2>
    <p class="text-center mt-4 text-gray-600">
      Your value hour is <br />
      <strong class="text-xl">{formattedValueHour}</strong>
    </p>
  </aside>
  <main>
    <h2 class="text-3xl font-medium text-gray-600 border-b pb-4 mb-4">Profile Data</h2>

    <div class="flex gap-4">
      <div class="grid gap-3">
        <label class="text-gray-500 font-medium text-sm" for="name">Name</label>
        <input class="px-4 py-2 rounded-sm text-sm" type="text" id="name" name="name" bind:value={$app.user.name} />
      </div>

      <div class="grid gap-3">
        <label class="text-gray-500 font-medium text-sm" for="avatar">Avatar Photo</label>
        <input class="px-4 py-2 rounded-sm text-sm" placeholder="https://" type="url" id="avatar" name="avatar" bind:value={$app.user.avatar} />
      </div>
    </div>

    <h2 class="mt-12 text-3xl font-medium text-gray-600 border-b pb-4 mb-4">Planning</h2>

    <div class="flex gap-4">
      <div class="grid gap-3">
        <label class="text-gray-500 font-medium text-sm" for="monthly-budget">How many <br />do I want to win per month?</label>
        <input class="px-4 py-2 rounded-sm text-sm" type="amount" step="0.1" id="monthly-budget" name="monthly-budget" placeholder="R$" bind:value={$app.planning.monthlyIncome} />
      </div>

      <div class="grid gap-3">
        <label class="text-gray-500 font-medium text-sm" for="hours-per-day"
          >How many hours<br />
          do I want to work per day?</label
        >
        <input class="px-4 py-2 rounded-sm text-sm" type="number" id="hours-per-day" name="hours-per-day" bind:value={$app.planning.workHoursPerDay} />
      </div>
    </div>

    <div class="flex gap-4 mt-4">
      <div class="grid gap-3">
        <label class="text-gray-500 font-medium text-sm" for="days-per-week">How many days <br />do I want to work per week?</label>
        <input class="px-4 py-2 rounded-sm text-sm" type="number" id="days-per-week" name="days-per-week" bind:value={$app.planning.workDaysPerWeek} />
      </div>

      <div class="grid gap-3">
        <label class="text-gray-500 font-medium text-sm" for="vacation-per-year"
          >How many vacation weeks<br />
          do I want to take per year?</label
        >
        <input class="px-4 py-2 rounded-sm text-sm" type="number" id="vacation-per-year" name="vacation-per-year" bind:value={$app.planning.vacationWeeks} />
      </div>
    </div>
  </main>
</div>
