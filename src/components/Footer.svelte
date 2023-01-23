<!-- Footer -->
<footer>
  <div class="links margins">
    <a href="https://github.com/trmid/poolygotchi" target="_blank" rel="noreferrer">
      <img src="img/icons/github.svg" alt="Github">
    </a>
    <a href="https://pooltogether.com/discord" target="_blank" rel="noreferrer">
      <img src="img/icons/discord.svg" alt="Discord">
    </a>
    <a href="https://docs.pooltogether.com/" target="_blank" rel="noreferrer">
      <img src="img/icons/pool-together.svg" alt="PoolTogether Docs">
    </a>
  </div>
  <div class="margins attributes">
    <i>Made by <a href="https://trmid.eth.limo" target="_blank" rel="noreferrer">trmid</a> and the PoolTogether Community.</i>
    <br>
    <i>Artwork by <a href="https://twitter.com/noiamgodzilla" target="_blank" rel="noreferrer">noiamgodzilla</a>.</i>
  </div>
</footer>

<!-- Style -->
<style>
  footer {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background-color: var(--c1);
    margin-top: 5rem;
  }

  footer::after {
    content: "";
    position: absolute;
    top: -3px;
    left: 0;
    right: 0;
    height: 3px;
    background-color: var(--shadow-color);
  }

  footer > .links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
  }

  footer > .links > a {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
  }

  footer > .links > a:hover {
    opacity: 1;
  }

  footer > .links > a > img {
    width: 24px;
    height: 24px;
    color: var(--c3);
  }

  .attributes {
    font-size: small;
    opacity: 0.6;
    text-align: center;
    line-height: 1.5;
  }
</style>