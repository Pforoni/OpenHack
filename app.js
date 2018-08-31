

var lista = [
    {
        "name": "minecraft-lb",
        "endpoints": {
            "minecraft": "40.114.83.14:25565",
            "rcon": "40.114.83.14:25575"
        },
        "status": {
            "data": {
                "version": " v1.13 (protocol 393)",
                "description": "A Minecraft Server Powered by Docker",
                "players": {
                    "activePlayers": 0,
                    "limitPlayers": 20,
                    "list": []
                },
                "ping": "64.776ms"
            }
        }
    },
    {
        "name": "minecraft-lb-2",
        "endpoints": {
            "minecraft": "13.68.196.108:25565",
            "rcon": "13.68.196.108:25575"
        },
        "status": {
            "data": {
                "version": " v1.13 (protocol 393)",
                "description": "A Minecraft Server Powered by Docker",
                "players": {
                    "activePlayers": 1,
                    "limitPlayers": 20,
                    "list": [
                        {
                            "id": "bb58f710-f82e-3e43-b4f5-dcbcb4e071b5",
                            "name": "TrenorrVinifig"
                        }
                    ]
                },
                "ping": "61.665ms"
            }
        }
    }
]

function deletaPod(vl) {
    console.log(vl.id);
    var value = JSON.stringify(vl.id);
    var settings = {       
        "url": "https://rconapi20180830040514.azurewebsites.net/api/pods",
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json",
          },
        "data": value
    }

    $.ajax(settings).done(function (response) {
        geraLista();
        alert("Servidor deletado com sucesso!!!");
    }).fail(function (jqXHR, textStatus) {
        alert("error: " + textStatus);
    });
}

function criaPod() {
    var value = JSON.stringify($("#nameSrv").val());
    var settings = {       
        "url": "https://rconapi20180830040514.azurewebsites.net/api/pods",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
          },
        "data": value
    }

    $.ajax(settings).done(function (response) {
        geraLista();
        alert("Servidor criado com sucesso!!!");
        
    }).fail(function (jqXHR, textStatus) {
        alert("error: " + textStatus);
    });
}

function geraLista() {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rconapi20180830040514.azurewebsites.net/api/pods",
        "method": "GET"
    }


    $.ajax(settings).done(function (response) {

        //console.log(response);
        var trHTML = '';

        $.each(response, function (i, item) {
            listJog = "";
            console.log(item);
            if (item.status.data.players.list.length) {
                $.each(item.status.data.players.list, function (i, item) {
                    listJog += '<li>' + item.name + '</li>';
                });
            }

            trHTML += '<tr><td>' + item.endpoints.minecraft + '</td><td>' + item.name + '</td><td>' +
                item.status.data.players.activePlayers + '/' + item.status.data.players.limitPlayers +

                '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse-' + i + '" aria-expanded="true" aria-controls="collapse-' + i + '"">Ver</button>' +

                '<div id="collapse-' + i + '" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">' +
                '<div class="card-body">' +
                '<ul>' +
                listJog +
                '</ul>' +
                '</div>' +
                '</div>' +
                '</td><td>' + item.status.data.ping + '</td><td><button id="' + item.name + '" type="button" class="btn btn-danger" onclick="deletaPod(this)">Remover</button></td></tr>';

        });

        $('#tbServer').append(trHTML);
    }).fail(function (jqXHR, textStatus) {
        alert("error: " + textStatus);
    });


}
