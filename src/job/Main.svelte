<script>
  const job = {
    id: 2,
    name: 'Job 2',
    dailyHours: 1,
    totalHours: 4,
    status: 'Em andamento',
    remaining: 1,
    budget: 100,
    createdAt: new Date(),
  };
</script>

<!-- <div class="container flex animate-up delay-2">
  <main>
    <form id="form-job" method="post" action="/job">
      <fieldset>
        <legend>Dados do Job</legend>
        <div class="separator light"></div>

        <div class="input-wrapper">
          <label for="name">Nome do Job</label>
          <input type="text" id="name" name="name" />
        </div>

        <div class="input-group">
          <div class="input-wrapper">
            <label for="daily-hours"
              >Quantas horas <br />
              por dia vai dedicar ao job?</label
            >
            <input type="number" step="0.1" id="daily-hours" name="daily-hours" />
          </div>

          <div class="input-wrapper">
            <label for="total-hours"
              >Estimativa de <br />
              horas para esse Job?</label
            >
            <input type="number" id="total-hours" name="total-hours" />
          </div>
        </div>
      </fieldset>
    </form>
  </main>
  <aside class="card">
    <img src="/images/money-gray.svg" alt="Imagem de Dinheiro" />
    <p>Preencha os dados ao lado para ver o valor do projeto</p>
    <div class="button-group">
      <button class="button green" form="form-job" type="submit" title="Salvar Dados">Salvar</button>
      <a href="/" class="button gray">
        <img src="/images/trash-24.svg" alt="Cancelar cadastro" title="Cancelar cadastro" />
      </a>
    </div>
  </aside>
</div> -->

<div class="container mx-auto animate-up delay-2 flex justify-between bg-gray-100 py-12 lg:px-72">
  <div class="flex gap-4 flex-col">
    <h2 class="text-3xl font-medium text-gray-600 border-b pb-4 mb-4">Dados do Job</h2>
    <div class="grid gap-3">
      <label class="text-gray-500 font-medium text-sm" for="name">Nome do Job</label>
      <input class="px-4 py-2 rounded-sm text-sm" type="text" id="name" name="name" value={job.name} />
    </div>

    <div class="grid gap-3">
      <label class="text-gray-500 font-medium text-sm" for="avatar">Quantas horas por dia vai dedicar ao job?</label>
      <input class="px-4 py-2 rounded-sm text-sm" id="daily-hours" name="daily-hours" type="number" step="0.5" value={job.dailyHours} />
    </div>

    <div class="grid gap-3">
      <label class="text-gray-500 font-medium text-sm" for="avatar">Estimativa de horas para esse Job?</label>
      <input class="px-4 py-2 rounded-sm text-sm" id="total-hours" name="total-hours" type="number" value={job.totalHours} />
    </div>
  </div>

  <div class="grid gap-3">
    <img src="/images/money-color.svg" alt="Imagem de Dinheiro" />
    <p>
      O valor do projeto ficou em <strong>R$ {job.budget.toFixed(2).replace('.', ',')} </strong>
    </p>
  </div>
</div>

<!-- <div class="modal-wrapper">
  <div class="modal">
    <img src="/images/trash-48.svg" alt="Excluir Job" title="Excluir Job" />
    <h3>Excluir Job</h3>
    <p>
      Quer mesmo excluir esse job? <br />
      Ele será apagado para sempre.
    </p>
    <footer>
      <a class="button gray" href="#">Cancelar</a>
      <button class="button red" type="submit" form="delete-job">Excluir Job</button>
    </footer>
  </div>
</div> -->
