window.onload = function() {
    playVideo('videoPlayer', 'teddy/Original_Teddy.mp4');
    playVideo('videoPlayer2', 'dozer/Original_Render.mp4');
	playVideo('videoPlayer3', 'face/original_face.mp4');
    playVideo('videoPlayer4', 'room/org.mp4');
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
	var videoPlayer3 = document.getElementById('videoPlayer3');
    var videoText3 = document.getElementById('videoText3');
    var videoPlayer4 = document.getElementById('videoPlayer4');
    var videoText4 = document.getElementById('videoText4');

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
        'bright_blue.mp4': 'Give bulldozer brighter color and make tyres blue',
        'miro.mp4': 'Give bulldozer Miro painting style',
        'blue.mp4': 'Give the tyres blue color',
        'red_yellow.mp4': 'Make bulldozer red and give cones yellow color',
        'black_Red.mp4': 'Make tyres deep black and turn comes into red',
        'purple.mp4': 'Turn cones into purple',
        'red.mp4': 'Turn the bulldozer into red'
    };
	
	var videoMappings3 = {
        'original_face.mp4': 'Original NeRF',
		'black_jacket.mp4': 'Give him black jacket',
        'einstein_superman_jacket.mp4': 'Make him Einstein and give his jacket superman touch',
        'hair_black.mp4': 'Turn his hair black',
        'joker_batman.mp4': 'Make him joker and give his jacket batman touch',
        'moustache_yellow_jacket.mp4': 'Give him moustache and make his jacket yellow',
        'hair_purple.mp4': 'Turn his hair into purple',
        'red_blue.mp4': 'Make his hair red and give him blue jacket'
    };

    var videoMappings4 = {
        'org.mp4': 'Original NeRF',
        'blue.mp4': 'Give the TV blue color',
        'green.mp4': 'Give the TV green color',
        'edward.mp4': 'Give the TV Edward Munch style',
        'van_gogh.mp4': 'Give the TV Van Gogh style',

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
	
	    videoPlayer3.addEventListener('loadeddata', function() {
        var videoSrc3 = videoPlayer3.currentSrc.split('/').pop();
        console.log("Video 3 loaded: " + videoSrc3); // Log the loaded video source
        videoText3.textContent = videoMappings3[videoSrc3] || 'Unknown Video';
    });

    videoPlayer4.addEventListener('loadeddata', function() {
        var videoSrc4 = videoPlayer4.currentSrc.split('/').pop();
        console.log("Video 4 loaded: " + videoSrc4); // Log the loaded video source
        videoText4.textContent = videoMappings4[videoSrc4] || 'Unknown Video';
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
