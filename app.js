function managedClusters() {
    $.ajax({
        url: "https://management.azure.com/subscriptions/878db795-8002-456c-9841-bc2c43b269ea/providers/Microsoft.ContainerService/managedClusters?api-version=2018-03-31",
        headers: { "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83N2EzNWQ1Yi0wNWFiLTQ2NmMtOGE5NS01MjkwZGYxNDkyZmQvIiwiaWF0IjoxNTM1NjUyODE0LCJuYmYiOjE1MzU2NTI4MTQsImV4cCI6MTUzNTY1NjcxNCwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhJQUFBQXZIeFVzaHZMK3VNZTZ2eS9wVloxUEQrZXdQYk50a2hzS1ZTdFh3di9sbVE9IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjdmNTlhNzczLTJlYWYtNDI5Yy1hMDU5LTUwZmM1YmIyOGI0NCIsImFwcGlkYWNyIjoiMiIsImRldmljZWlkIjoiMzMxODI0Y2YtMzE4Yy00ZWM4LWExMjMtN2RmZWQyMjc2YTYxIiwiZV9leHAiOjI2MjgwMCwiZ3JvdXBzIjpbIjRiZjAzZTEyLWQxNzUtNDg2NS04ZTBlLTllYmQ4NDA5Mzk0NCJdLCJpcGFkZHIiOiIxODkuOC44OC4zNCIsIm5hbWUiOiJIYWNrZXIgT25lIiwib2lkIjoiZWY3NDkyMDgtMWRmNC00ZWFlLWE2OGQtNjYwNjNiOGNmMDIzIiwicHVpZCI6IjEwMDMwMDAwQUQzRDEzRkQiLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJEX25zZ0htY01xTHpIN1YtSE1Cd3NtZzdjbi1zLUdGeF94eEhOM1lyU0JZIiwidGlkIjoiNzdhMzVkNWItMDVhYi00NjZjLThhOTUtNTI5MGRmMTQ5MmZkIiwidW5pcXVlX25hbWUiOiJoYWNrZXIxQE9UQVBSRDQ5Mm9wcy5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJoYWNrZXIxQE9UQVBSRDQ5Mm9wcy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJac3VqdFFZQ3BrU0dIR09GYWpGbkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiXX0.nR8TAAleCGth22M09qQh-rqANuQ7OMjON84WZqS9SDnu8QaXwD0KFx8c_ZYW1kIXaLg1MvTnQz4SODsPuoIRFoculhPrss3Rg7Ybc1f110sBGQXr2icomY2H6bpAfP-H0XoyWbWIoD_P-akaJM4nm7cQS6OGWiEmBeFB1xbLl_5djus3XkG0m_MLnMVzDbdj2ec9oOaA7uNkhXjDWQcB9pDTPVEuDgdEJU6AldMfosSAoCmFZ-O7raQ6rXbFkheCQOs0Ftzb3oRUPZJVi00Vryg-T7Fl_vQPkNTRYzo8ePegkBNaaQ4M3SOUcAzCJ0_GanfxC5nPD-taRqMIC4wWTA" }
    })
        .done(function (data) {
            var agentPoolProfiles = data.value[0].properties.agentPoolProfiles[0];

            $('#infoCl').html("Nodes: " + agentPoolProfiles.count + "\nMaxPode: "
                + agentPoolProfiles.maxPods + "\nOS:" + agentPoolProfiles.osType);
            console.log(data.value[0]);
        })
        .fail(function (jqXHR, textStatus) {
            alert("error: " + textStatus);
        });
}

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://minecrafta-aks-rg-878db7-e66a66c5.hcp.eastus.azmk8s.io:443/swagger-2.0.0.pb-v1",
    "method": "GET",
    "headers": {
        "Accept": "application/json, */*",
        "Authorization": "Bearer cb8c190820c0d6c6ae2f15dbfd1477b0",
        "Cache-Control": "no-cache",
    }
}

function teste() {
    $.ajax(settings).done(function (response) {
        debugger;
        console.log(response);
    }).fail(function (jqXHR, textStatus) {
            alert("error: " + textStatus);
    });
}