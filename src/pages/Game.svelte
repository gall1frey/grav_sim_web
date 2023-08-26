<script>
    // import PlayFrame from "../components/PlayFrame.svelte";
    // var velocity = 300;
    // var dist_travelled = 23;
    // var time_elapsed = 32;
    // var dist_to_go = 3;
    // var fuel_percent = 44;
    // var username = "Gallifrey";
    // var points = 100;
    import Level from "../components/Level.svelte";
    let level_name = 'level1';
</script>

<div class="play-arena">
    <!-- <PlayFrame {velocity} {dist_travelled} {time_elapsed} {dist_to_go} {fuel_percent} {username} {points}/> -->
    <Level {level_name}/>
</div>

<style>
    .play-arena {
        position: fixed;
        height: 100%;
        width: 100%;
        margin: auto;
        top: 0;
        left: 0;
        display: flex;
    }
</style>