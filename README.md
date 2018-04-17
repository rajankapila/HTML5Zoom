#HTML5Zoom

This object allows you create a zoomable html5 video player.

Use:

```
<section id="video_player">
    <div  id="player_container" >
        <div id="player_screen_container" >
            <div id="player_container_inner">
                <video width="640" height="480" id="player"  controls="controls" preload="none">
                    <source type="video/mp4" src="video_url" />
                </video>
            </div>
        </div>
    </div>
    <div  id="zooming" >
        <div >
            <div id="zoom_in"  >
                <img src="plus.png" alt="zoom in">
            </div>
            <div id="zoom_out" >
                <img src="minus.png" alt="zoom out">
            </div>
        </div>
    </div>
</section>

<script>
    var html5ZOOM = new HTML5Zoom("player", "player_container", "player_container_inner", "zoom_in", "zoom_out");
    
</script>

<style>
    #player_container #player_screen_container {
    	position:relative;
    }
    
    #player_container_inner {
    	left: 0;
    	top: 0;
    	position:absolute;
    }

</style>

```