<script lang="ts">
  import Header from "./components/Header.svelte";
	import Router from "svelte-spa-router";
  import { routes } from "./routes";
  import Footer from "./components/Footer.svelte";
  import ServiceWorker from "./components/ServiceWorker.svelte";
</script>

<!-- Header -->
<Header />

<!-- Router -->
<Router {routes}/>

<!-- Footer -->
<Footer />

<!-- Service Worker -->
<ServiceWorker />
