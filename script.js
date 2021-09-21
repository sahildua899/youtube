var videoSection = document.getElementById('videos-section');
var selectedColor = document.getElementById('background-color');
selectedColor.oninput = function(e) {
    var testcolor = e.target.value;
    console.log(testcolor);
    document.body.style.backgroundColor = testcolor;
}

var http = new XMLHttpRequest();
http.open('GET', 'https://6145d55a38339400175fc723.mockapi.io/Youtube', true);

http.onreadystatechange = function(){
    if(this.readyState == 4){
        var result = JSON.parse(this.responseText);
        function renderVideo(data) {
            videoSection.innerHTML += `<a class='card-link' href = ./videoplay.html?watch=${data.id}>
            <div class="card-section">
                <iframe width="1019" height="573" src="https://www.youtube.com/embed/${data.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h2 class="youtube-name">
                    ${data.youtubeName} </h2>
                    <h2 class="youtube-brand">${data.youtubeChannel}</h2>
                    <h2 class="youtube-views">${data.youtubeView} Views</h2>
            </div>
        </a>`
        }

        for(i=0; i<=result.length; i++) {
            renderVideo(result[i]);
        }
        
        
    }
}
http.send();