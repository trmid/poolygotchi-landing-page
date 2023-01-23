<script>
  import FAQ from "../components/FAQ.svelte";
	import Logo from "../components/Logo.svelte";
  import ScrollTarget from "../components/ScrollTarget.svelte";
	import TestnetAnnouncement from "../components/TestnetAnnouncement.svelte";
</script>

<!-- Main -->
<main class="margins">

	<!-- Logo -->
	<Logo/>

	<!-- News -->
	<h2 class="margins">
		<span>news</span>
		<i class="icofont-newspaper"/>
	</h2>

	<!-- Testnet Announcement -->
	<TestnetAnnouncement/>

	<!-- About -->
	<ScrollTarget id="about" />
	<h2>
		<span>about</span>
		<i class="icofont-question-circle"/>
	</h2>

	<p>
		Poolygotchi is a community project that provides a fun, alternative way of interacting with the <a href="https://pooltogether.com" target="_blank" rel="noreferrer">PoolTogether</a> savings protocol.
	</p>

	<br>

	<div id="mood-demo">
		<div class="wrapper">
			<img src="https://ipfs.io/ipfs/QmUtH7gNUMLFRhUP5fnqUDEiQ8yPh7ML6PEC2KKhEEfQ2F/assets/species/0/crying.gif" alt="crying birb">
			<img src="https://ipfs.io/ipfs/QmUtH7gNUMLFRhUP5fnqUDEiQ8yPh7ML6PEC2KKhEEfQ2F/assets/species/0/sad.gif" alt="sad birb">
			<img src="https://ipfs.io/ipfs/QmUtH7gNUMLFRhUP5fnqUDEiQ8yPh7ML6PEC2KKhEEfQ2F/assets/species/0/neutral.gif" alt="neutral birb">
			<img src="https://ipfs.io/ipfs/QmUtH7gNUMLFRhUP5fnqUDEiQ8yPh7ML6PEC2KKhEEfQ2F/assets/species/0/happy.gif" alt="happy birb">
		</div>
	</div>

	<p>
		When you hatch a poolygotchi, you are making a promise to your new digital pet to meet your savings goal with the PoolTogether protocol. While you are meeting your goal, your poolygotchi will be filled with joy, but if you start falling behind, it will reflect in your poolygotchi's mood!
	</p>

	<br>

	<p>
		Hatch a poolygotchi of your own by defining a personal savings goal and making your first deposit onto PoolTogether! Check in on your poolygotchi to check for daily prizes, and keep depositing regularly to keep your pooly healthy!
	</p>

	<!-- FAQ -->
	<h2>
		<span>faq</span>
		<i class="icofont-support-faq"/>
	</h2>

	<FAQ>
		<span slot="question">Are Poolygotchis NFTs?</span>
		<p>
			No, when you hatch a poolygotchi, it is not minted as an NFT. This is because your poolygotchi is tied to your wallet and personal savings goal, which should not be tradeable.
		</p>
		<aside>
			However, some environments and alternate poolygotchi species will be collectable as NFTs in the game!
		</aside>
	</FAQ>

	<FAQ>
		<span slot="question">Can I manage my PoolTogether deposits through the app?</span>
		<p>
			Yes! You can deposit, withdraw, and claim prizes from your existing PoolTogether balances directly in the Poolygotchi app.
		</p>
	</FAQ>

	<FAQ>
		<span slot="question">What networks does the app support?</span>
		<p>
			Poolygotchi is currently deployed to the Optimism Goerli test network, and will be deployed to the Optimism mainnet soon.
		</p>
	</FAQ>

	<FAQ>
		<span slot="question">I don't use PoolTogether on Optimism, can I still use Poolygotchi?</span>
		<p>
			Yes, you can!
		</p>
		<p>
			You will still need to hatch and manage your poolygotchi on Optimism, but you will <strong>NOT</strong> need to move any of your PoolTogether savings over to Optimism to use Poolygotchi.
		</p>
	</FAQ>

	<FAQ>
		<span slot="question">Can my poolygotchi die?</span>
		<p>
			No, your poolygotchi is immortal and cannot die.
		</p>
		<p>
			However, if you fail to meet your savings goal for more than 3 weeks, your poolygotchi will assume you have abandoned it and will begin to hibernate. You can wake your poolygotchi by catching up with your existing savings goal or setting a new one!
		</p>
	</FAQ>

</main>

<style>
	main {
		padding: 1rem;
	}

	h2 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	p, aside {
		padding: 0 1rem;
	}

	aside {
		opacity: 0.6;
		font-style: italic;
	}

	#mood-demo {
		display: flex;
		justify-content: center;
	}

	#mood-demo > .wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		background: var(--tri-gradient);
    box-shadow: 5px 5px 0 var(--shadow-color);
    border-radius: 0.5rem;
    width: fit-content;
    padding: 0.5rem;
	}

	#mood-demo > .wrapper > img {
		width: 64px;
	}
</style>