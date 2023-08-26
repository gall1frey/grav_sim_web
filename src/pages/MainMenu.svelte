<script>
    import MainMenuOption from "../components/MainMenuOption.svelte";
</script>

<div class="mainmenu-container">
    <MainMenuOption option={"PLAY GAME"}/>
    <MainMenuOption option={"SCOREBOARD"}/>
    <MainMenuOption option={"CREATIVE MODE"}/>
    <MainMenuOption option={"EXIT"}/>
</div>

<style>
    .mainmenu-container {
        position: relative;
        width: max-content;
        color: cyan;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 80%;
    }
</style>