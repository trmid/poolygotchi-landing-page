<script type="ts">
  import { link } from "svelte-spa-router";
  import { scrollTarget } from "./ScrollTarget.svelte";
</script>

<header>
  <nav class="margins">
    <a class="home" href="/" use:link on:click={() => document.body.scrollTop = 0}>
      <img id="icon" src="favicon.png" alt="home">
    </a>
    <a href="/?about" use:link use:scrollTarget>about</a>
    <a href="https://test.poolygotchi.com">testnet</a>
  </nav>
</header>

<style>
  header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: var(--c0);
    z-index: 2;
  }

  header::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 5px;
    background-color: var(--shadow-color);
  }

  nav {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  #icon {
    width: 36px;
    transition: transform 0.2s ease-in-out;
  }

  #icon:hover {
    transform: translate(-1px, -1px);
    filter: drop-shadow(2px 3px 0px var(--shadow-color));
  }

  a.home {
    display: flex;
    align-items: center;
  }

  nav > a:not(.home) {
    display: block;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: var(--c0);
    border: 1px solid var(--shadow-color);
    text-decoration: none;
  }

  nav > a:not(.home):hover {
    background: var(--bg-gradient);
    border: 1px solid var(--c3);
  }

</style>