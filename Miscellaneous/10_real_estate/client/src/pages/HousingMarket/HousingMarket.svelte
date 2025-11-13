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
</script>

<h1>Housing Market</h1>
<p>Her vises alle boliger</p>