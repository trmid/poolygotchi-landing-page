<script type="ts">
  export let params: any;
  console.log(params);
</script>

<div id="container">
  <h1 class="text-gradient">Whoops!</h1>
  <img src="https://ipfs.io/ipfs/bafybeig4piifz3vfoam7qccrp5hfujadtacejbmd5hdqo3to5t2wbr7flm/sad.gif" alt="sad birb">
  <p>
    The page you are looking for doesn't seem to exist!
  </p>
</div>

<style>
  #container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }

  #container > img {
    width: 128px;
    max-width: 90%;
  }
</style>