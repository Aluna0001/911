<script>
  fetch("http://localhost:8080/realestateagents")
    .then((response) => response.json())
    .then((result) => {
      realEstateAgents = result.data;
    });
</script>

<h1>About</h1>
<p>Real agents...</p>