$(document).ready(function() {

    $('#movieSend').click(function() {
        var search = $('#filmTitle').val()
        sessionStorage.setItem('film', search)
    })
    var movie = sessionStorage['film'];
    console.log(movie)
    $.get('https://galvanize-cors-proxy.herokuapp.com/http://www.omdbapi.com/?t=' + movie, function(data) {
        var actors = data.Actors;
        var awards = data.Awards;
        var poster = data.Poster;
        $('#actors').append(actors)
        $('#awards').append(awards)
        $('#poster').attr('src', poster)
        console.log(data)
    })
    $('form').submit(function(event) {
        event.preventDefault();
        var post = {
            title: $('#title').val(),
            genre: $('#genre').val(),
            description: $('#description').val(),
            coverPicture: $('#image').val(),
            rating: $('#rating').val()
        }
        console.log(post)
        $.post("https://galvanize-cors-proxy.herokuapp.com/http://mighty-eyrie-15280.herokuapp.com/films", post).done(function(message) {
            $('.save-status').text(message.message);
            $('.save-status').fadeIn(500).delay(2000).fadeOut(500);
        })
    })
})
