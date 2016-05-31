$(document).ready(function() {
    $("h1").click(function() {
        alert("working")
    })
        var movie = $('#filmTitle').val();
        console.log(movie)
        $.get('http://www.omdbapi.com/?t=' + movie, function(data) {
            var actors = data.Actors;
            var awards = data.Awards;
            var poster = data.Poster;
             $('#actors').append(actors)
             $('#awards').append(awards)
             $('#poster').attr('src', poster)
            console.log(data)
    })
})
