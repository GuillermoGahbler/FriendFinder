$('#surveySubmit').on("click", function (event) {
    event.preventDefault();
    const data = ($(this).parent().serialize());
    $.post("./api/matches", data)
        .then(response => {
            $('#modalWindow')
            .addClass ('show overlay')
            .removeClass ('hide')
            $('#match').html(`
            <h2>${response.user.name}</h2>
            <h3>Your match is </h3>
            <h2>Name: ${response.match.name}</h2>
            <img src = ${response.match.photo}>
            `)

        })
});