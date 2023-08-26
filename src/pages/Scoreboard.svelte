<script>
    import ScoreboardEntry from "../components/ScoreboardEntry.svelte";
</script>
<div class="scoreboard-page">
    <div class="title">
        <h1>SCOREBOARD</h1>
    </div>
    <div class="scoreboard">
        <ScoreboardEntry name="Gallifrey" score="500"/>
        <ScoreboardEntry name="Gallifrey" score="50"/>
        <ScoreboardEntry name="Gallifrey" score="5"/>
        <ScoreboardEntry name="Gallifrey" score="50"/>
        <ScoreboardEntry name="Gallifrey" score="500"/>
    </div>
</div>

<style>
    .scoreboard-page {
        display: flex;
        flex-direction: column;
    }
    .scoreboard {
        position: relative;
        width: max-content;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 70%;
    }

    .title {
        margin: auto;
        text-align: center;
        font-size: 3rem;
    }
</style>
