$('#form').on('submit', function (event) {
    event.preventDefault();
    let formData = new FormData(this);

    $.ajax({
        url: 'http://localhost/join',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
    }).done(function (data) {
        if (data.error) {
            alert(data.error)
        } else {
            $('.modal-body').html(`<p>Ваш API ключ: ${data.key}</p>`);
            $('#apiKeyModal').modal('show');
            $('#closeModal').on('click', function () {
                window.location.replace(`/users.html?key=${data.key}`)
            });
        }
    }
    ).fail(function (xhr, status, errorThrown) {
        alert(`ERROR: ${errorThrown}`);
    });
});
