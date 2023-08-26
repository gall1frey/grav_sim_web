<script>
	import Hello from "./pages/Hello.svelte";
	import MainMenu from "./pages/MainMenu.svelte";
	import Scoreboard from "./pages/Scoreboard.svelte";
	import Game from "./pages/Game.svelte";
</script>

<main>
	<!--Hello/-->
	<!--MainMenu/-->
	<!--Scoreboard/-->
	<Game/>
</main>

<style>
	main {
		text-align: center;
		display: flex;
		justify-content: center;
		max-height: 100vh;
		max-width: 100vw;
	}
</style>