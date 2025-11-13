<script>
  import { Router, Route, Link } from "svelte-routing";
  import About from "./pages/About/About.svelte";
  import HousingMarket from "./pages/HousingMarket/HousingMarket.svelte";
</script>

<!-- Det her minder også om routing i React -->
<Router>
  <nav>
    <Link to="/">Forside</Link>
    <Link to="/about">Om os</Link>
    <Link to="/housing">Boliger</Link>
  </nav>

  <main>
    <Route path="/" component={HousingMarket} />
    <Route path="/about" component={About} />
    <Route path="/housing" component={HousingMarket} />
    <!-- <main>
  <Route path="/">
    <HousingMarket />
  </Route>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/housing">
    <HousingMarket />
  </Route>
</main> -->
  </main>
</Router>

<style>
  nav {
    padding: 1rem;
    display: flex;
    gap: 1rem;
  }
</style>