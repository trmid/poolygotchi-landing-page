<script type="ts">
  import { onMount } from "svelte";
  import Logo from "../components/Logo.svelte";
  import SectionHeader from "../components/SectionHeader.svelte";

  let width = 600;
</script>

<!-- Main -->
<main class="margins">

	<!-- Logo -->
	<Logo/>

  <!-- Title -->
	<SectionHeader iconClass="icofont-chart-bar-graph">stats</SectionHeader>

  <!-- Charts -->
  <div id="charts" class="margins">

    <iframe title="Hatch Events Over Time" width="{width}" height="{width * 371 / 600}" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRRjqrrxiZabtTnsqgmxtjSkMpiu3hd3rJsVJ4l7QqzAc7efiUpB_IPOQRwjWqpz047xvJkrHAp_A8K/pubchart?oid=256600728&amp;format=interactive"/>

    <iframe title="Species" width="{width}" height="{width * 371 / 600}" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRRjqrrxiZabtTnsqgmxtjSkMpiu3hd3rJsVJ4l7QqzAc7efiUpB_IPOQRwjWqpz047xvJkrHAp_A8K/pubchart?oid=1182289985&amp;format=interactive"/>

    <iframe title="Environments" width="{width}" height="{width * 371 / 600}" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRRjqrrxiZabtTnsqgmxtjSkMpiu3hd3rJsVJ4l7QqzAc7efiUpB_IPOQRwjWqpz047xvJkrHAp_A8K/pubchart?oid=839365572&amp;format=interactive"/>

    <iframe title="Savings Goals" width="{width}" height="{width * 371 / 600}" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRRjqrrxiZabtTnsqgmxtjSkMpiu3hd3rJsVJ4l7QqzAc7efiUpB_IPOQRwjWqpz047xvJkrHAp_A8K/pubchart?oid=304149374&amp;format=interactive"/>

  </div>

</main>

<!-- Style -->
<style>
  main {
		padding: 1rem;
	}

  #charts {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
    box-sizing: content-box;
    overflow-x: auto;
    max-width: fit-content;
    border-radius: 1rem;
  }

  #charts > iframe {
    border-radius: 1rem;
  }

  @media screen and (max-width: 700px) {
    #charts {
      box-shadow: inset 0 0 5px var(--shadow-color);
    }
  }
</style>