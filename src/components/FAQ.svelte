<script type="ts">
  import { slide } from "svelte/transition";

  let expanded = false;
  let answer: HTMLElement | undefined = undefined;

  $: setTimeout(() => answer?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 500);

  const onClick = () => {
    expanded = !expanded;
  }
  const onEnter = (e: KeyboardEvent) => {
    if(e.key === "Enter") {
      onClick();
    }
  }
</script>

<!-- Question -->
<h3 on:click={onClick} on:keypress={onEnter} class:expanded>
  <slot name="question"></slot>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <i class="icofont-caret-{expanded ? 'up' : 'down'}" tabindex="0" on:click|stopPropagation={onClick} on:keypress|stopPropagation={onEnter} />
</h3>

<!-- Answer -->
{#if expanded}
  <div id="answer" transition:slide={{ duration: 500 }} bind:this={answer}>
    <slot></slot>
  </div>
{/if}

<!-- Style -->
<style>
  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0.5rem;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 0;
  }

  h3.expanded {
    border-radius: 0.5rem 0.5rem 0 0;
    border-bottom: none;
  }

  #answer {
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    padding: 0.5rem;
    background-color: var(--c1);
    background: var(--bg-gradient);
    border: 1px solid #fff5;
    border-top: none;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  i {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
  }

  i:hover {
    background-color: #fff2;
    background: var(--transparent-gradient);
  }
</style>