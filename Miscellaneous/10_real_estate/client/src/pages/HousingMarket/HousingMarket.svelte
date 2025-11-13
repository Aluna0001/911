<script>
  import { onMount } from 'svelte';
  let housingMarket = [];

  onMount(() => {
    fetch("http://localhost:8080/houses")
      .then((response) => response.json())
      .then((result) => {
        housingMarket = result.data;
        console.log(result);
      });
  });

  function addHouse() {
    const newHouse = {
      street: "Ugandavej"
    };
    
    fetch("http://localhost:8080/houses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newHouse)
    })
    .then((response) => response.json())
    .then((result) => {
      housingMarket = result.data;
    });
  }
</script>

<h1>Housing Market</h1>
<p>Her vises alle boliger</p>

<button on:click={addHouse}>Add New House</button>

{#each housingMarket as house}
  <div>
    <h4>{house.street}</h4>
  </div>
{/each}