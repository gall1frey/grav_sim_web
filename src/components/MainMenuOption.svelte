<script>
    export let option;
</script>

<div class="container">
    <span>
        {option}
    </span>
</div>

<style>
    .container {
        border: 5px cyan solid;
        border-radius: 20px;
        padding: 2%;
        min-height: 3vh;
        width: 40vw;
    }
    .container:hover {
        background: rgba(37, 150, 190, 0.3);
    }
</style>