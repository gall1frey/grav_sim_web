<script>
    export let name, score;
</script>

<div class="container">
    <div class="name-container">
        <span>{name}</span>
    </div>
    <div class="score-container">
        <span>{score}</span>
    </div>
</div>

<style>
    .container {
        border: 5px cyan solid;
        border-radius: 20px;
        padding: 2%;
        min-height: 3vh;
        width: 40vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .container:hover {
        background: rgba(37, 150, 190, 0.3);
    }

    .name-container {
        text-align: left;
    }
    .score-container {
        text-align: right;
    }
</style>