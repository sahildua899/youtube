$(document).ready(function() {
    var selectedColor = document.getElementById('background-color');
selectedColor.oninput = function(e) {
    var testcolor = e.target.value;
    console.log(testcolor);
    document.body.style.backgroundColor = testcolor;
}

    var productId = window.location.search.split('=')[1];
    var videoSection = document.querySelector('.video-section'); 

    var renderData = new XMLHttpRequest();
    renderData.open('GET', 'https://6145d55a38339400175fc723.mockapi.io/Youtube/'+ productId , true );
    renderData.onreadystatechange = function(){
        if(this.readyState == 4) {
            var mainData = JSON.parse(this.responseText);
            videoSection.innerHTML += `<div class="card-section">
            <iframe width="1019" autoplay=1 mute=1 height="573" src="https://www.youtube.com/embed/${mainData.youtubeId}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1" autoplay=1 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h2 class = "youtube-name">${mainData.youtubeName} </h2>
                <h2 class="youtube-brand">${mainData.youtubeChannel}</h2>
                <h2 class="youtube-views">${mainData.youtubeView} Views</h2>
        </div>`
        }
    }
    renderData.send()
});