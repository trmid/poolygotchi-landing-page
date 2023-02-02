<script type="ts">
  export let iconClass: string;
</script>

<!-- Header -->
<h2>
  <span>
    <slot></slot>
  </span>
	<i class={iconClass}/>
</h2>

<!-- Style -->
<style>
  h2 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}
</style>