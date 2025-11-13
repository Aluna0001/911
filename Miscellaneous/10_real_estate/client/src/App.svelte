<script>
  import Router from 'svelte-spa-router';
  import About from "./pages/About/About.svelte";
  import HousingMarket from "./pages/HousingMarket/HousingMarket.svelte";

  const routes = {
    '/': HousingMarket,
    '/about': About,
    '/housing': HousingMarket
  };
</script>

<nav>
  <a href="#/">Forside</a>
  <a href="#/about">Om os</a>
  <a href="#/housing">Boliger</a>
</nav>

<main>
  <Router {routes} />
</main>

<style>
  nav {
    padding: 1rem;
    display: flex;
    gap: 1rem;
  }
</style>