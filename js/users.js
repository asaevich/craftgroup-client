$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)

    $.ajax({
        url: `http://localhost/users?${searchParams}`,
        type: "GET",
    }).done(function (users) {
        $('#dropdown').removeClass('d-lg-none');
        users.forEach(user => {
            var card = `<div class="col mb-3">
                        <div class="card shadow-sm">
                            <div class="card-body p-0">
                                <img src="data:image/jpeg;base64, ${user.photo}" width="100%"/>
                                <span class="font-weight-bold">Имя: </span><span class="user-name">${user.name}</span><br>
                                <span class="font-weight-bold">Email: </span><span class="user-email">${user.email}</span>
                            </div>
                        </div>
                    </div>`;
            $('#users-container').append(card);
        });
    }).fail(function (xhr, status, errorThrown) {
        alert(`ERROR: ${errorThrown}`);
    }).always(function (msg) {
        console.log(msg);
    });
});

$('#dropdown-name').on('click', function () {
    $('div.col').remove();
    let searchParams = new URLSearchParams(window.location.search)

    $.ajax({
        url: `http://localhost/users?${searchParams}&order=name`,
        type: "GET",
    }).done(function (users) {
        users.forEach(user => {
            var card = `<div class="col mb-3">
                        <div class="card shadow-sm">
                            <div class="card-body p-0">
                                <img src="data:image/jpeg;base64, ${user.photo}" width="100%"/>
                                <span class="font-weight-bold">Имя: </span><span class="user-name">${user.name}</span><br>
                                <span class="font-weight-bold">Email: </span><span class="user-email">${user.email}</span>
                            </div>
                        </div>
                    </div>`;
            $('#users-container').append(card);
        });
    }).fail(function (xhr, status, errorThrown) {
        alert(`ERROR: ${errorThrown}`);
    }).always(function (msg) {
        console.log(msg);
    });
});

$('#dropdown-email').on('click', function () {
    $('div.col').remove();
    let searchParams = new URLSearchParams(window.location.search)

    $.ajax({
        url: `http://localhost/users?${searchParams}&order=email`,
        type: "GET",
    }).done(function (users) {
        users.forEach(user => {
            var card = `<div class="col mb-3">
                        <div class="card shadow-sm">
                            <div class="card-body p-0">
                                <img src="data:image/jpeg;base64, ${user.photo}" width="100%"/>
                                <span class="font-weight-bold">Имя: </span><span class="user-name">${user.name}</span><br>
                                <span class="font-weight-bold">Email: </span><span class="user-email">${user.email}</span>
                            </div>
                        </div>
                    </div>`;
            $('#users-container').append(card);
        });
    }).fail(function (xhr, status, errorThrown) {
        alert(`ERROR: ${errorThrown}`);
    }).always(function (msg) {
        console.log(msg);
    });
});