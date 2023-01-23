<!-- Module -->
<script type="ts" context="module">
  export function scrollTarget(node: HTMLElement) {
    const handleClick = () => {
      const target = location.hash.match(/\?[a-zA-Z0-9\-]+/);
      if(target) {
        console.log(target);
        document.getElementById(target[0].slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    node.addEventListener("click", handleClick);
    return {
      destroy: () => {
        node.removeEventListener("click", handleClick);
      }
    }
  }
</script>

<!-- Component -->
<script type="ts">
  import { onMount, tick } from "svelte";

  export let id: string;

  let elem: HTMLSpanElement;

  // Scroll to target if specified
  onMount(() => {
    const target = location.hash.match(/\?[a-zA-Z0-9\-]+/);
    if(target && target[0].slice(1) === id) {
      console.log(target, elem);
      setTimeout(() => {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  });
</script>

<!-- Scroll tag -->
<span {id} bind:this={elem} />

<!-- Style -->
<style>
  span {
    position: relative;
    top: -80px; 
  }
</style>