<script>
  import { app } from '../store';

  export let title;

  function goToHome() {
    $app.page = 'home';
  }
</script>

<header class="py-10 px-10 bg-gray-700">
  <div class="animate-up text-gray-300 font-semibold flex items-center">
    <button on:click={goToHome}>
      <img src="./images/back.svg" alt="Back Icon" />
    </button>
    <h1 class="mx-auto">{title}</h1>
  </div>
</header>
