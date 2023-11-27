window.onload = function() {
    playVideo('videoPlayer', 'teddy/Original_Teddy.mp4');
    playVideo('videoPlayer2', 'dozer/Original_Render.mp4');
};

function playVideo(playerId, videoName) {
    var videoPlayer = document.getElementById(playerId);
    var videoSource = videoPlayer.getElementsByTagName('source')[0];
    videoSource.src = videoName;
    videoPlayer.load();
    videoPlayer.play();
	console.log("Playing video: " + videoName);
}

document.addEventListener('DOMContentLoaded', function() {
    var videoPlayer1 = document.getElementById('videoPlayer');
    var videoText1 = document.getElementById('videoText');
    var videoPlayer2 = document.getElementById('videoPlayer2');
    var videoText2 = document.getElementById('videoText2');

    var videoMappings1 = {
        'Original_Teddy.mp4': 'Original NeRF',
        'Leopard_skin.mp4': 'Give this teddy leopard skin',
        'Polar_bear.mp4': 'Turn this teddy into polar bear',
        'Snake_skin.mp4': 'Give this teddy snake skin',
        'Black_n_white_cow.mp4': 'Turn this teddy into black & white cow',
        'Giraffe_skin.mp4': 'Turn this teddy into giraffe',
        'Tiger_stripes.mp4': 'Give this teddy tiger pattern'
    };

    var videoMappings2 = {
        'Original_Render.mp4': 'Original NeRF',
        'Give bulldozer brighter color and make tyres blue.mp4': 'Give bulldozer brighter color and make tyres blue',
        'Give bulldozer Miro painting style.mp4': 'Give bulldozer Miro painting style',
        'Give the tyres blue color.mp4': 'Give the tyres blue color',
        'Make bulldozer red and give cones yellow color.mp4': 'Make bulldozer red and give cones yellow color',
        'Make tyres deep black and turn comes into red.mp4': 'Make tyres deep black and turn comes into red',
        'Turn cones into purple.mp4': 'Turn cones into purple',
        'Turn the bulldozer into red.mp4': 'Turn the bulldozer into red'
    };

    videoPlayer1.addEventListener('loadeddata', function() {
        var videoSrc1 = videoPlayer1.currentSrc.split('/').pop();
        console.log("Video 1 loaded: " + videoSrc1); // Log the loaded video source
        videoText1.textContent = videoMappings1[videoSrc1] || 'Unknown Video';
    });

    videoPlayer2.addEventListener('loadeddata', function() {
        var videoSrc2 = videoPlayer2.currentSrc.split('/').pop();
        console.log("Video 2 loaded: " + videoSrc2); // Log the loaded video source
        videoText2.textContent = videoMappings2[videoSrc2] || 'Unknown Video';
    });
	

    // This function is updated to handle both video players
    window.playVideo = function(playerId, src) {
        var videoPlayer = document.getElementById(playerId);
        var videoSource = videoPlayer.getElementsByTagName('source')[0];
        videoSource.src = src;
        videoPlayer.load();
        videoPlayer.play();
    };
	
});
