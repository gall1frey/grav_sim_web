<script>
    export var velocity, dist_travelled, time_elapsed, dist_to_go, username, points
    export let fuel_percent;
    fuel_percent = fuel_percent+"%";
</script>

<div class="container">
    <div class="top-bar">
        <div class="up-box velocity">
            <div class="info">
                VELOCITY
            </div>
            <div class="value">
                {velocity}
            </div>
        </div>
        <div class="up-box dist-travelledd">
            <div class="info">
                DISTANCE TRAVELLED
            </div>
            <div class="value">
                {dist_travelled}
            </div>
        </div>
        <div class="up-box time">
            <div class="info">
                TIME ELAPSED
            </div>
            <div class="value">
                {time_elapsed}
            </div>
        </div>
        <div class="up-box dist-togo">
            <div class="info">
                DISTANCE TO GO
            </div>
            <div class="value">
                {dist_to_go}
            </div>
        </div>
    </div>
    <div class="bottom-bar">
        <div class="fuel">
            <div class="fuelbar">
                <div class="fuel-percent" style="--width:{fuel_percent}">
                </div>
            </div>
        </div>
        <div class="username">
            {username.slice(0,3).toUpperCase()}
        </div>
        <div class="points">
            {points}
        </div>
    </div>
</div>

<style>
    .container {
        height: 100%;
        width: 100%;
    }

    .top-bar {
        position: fixed;
        top: 2%;
        left: 0;
        height: 10vh;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    
    .bottom-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 10vh;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .fuel {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .username {
        width: 15%;
        font-size: 4rem;
    }
    
    .points {
        width: 15%;
        font-size: 4rem;
    }

    .up-box {
        width: 25%;
    }

    .info {
        height: 20%
    }
    
    .value {
        height: 80;
        font-size: 3rem;
    }

    .fuelbar {
        height: 30%;
        width: 90%;
        color: cyan;
        border: 5px cyan solid;
        margin-left: 2%;
    }

    .fuel-percent {
        background-color: cyan;
        height: 100%;
        width: var(--width);
    }
</style>