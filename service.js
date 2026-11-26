function searchProviders() {
    var location = document.getElementById("locationSearch").value.toLowerCase();
    var providers = document.getElementsByClassName("provider-card");
    var found = false;
    for (var i = 0; i < providers.length; i++) {
        var workerLocation = providers[i].getAttribute("data-location").toLowerCase();
        if (workerLocation.includes(location) && location != "") {
            providers[i].style.display = "block";
            found = true;
        }
        else if (location == "") {
            providers[i].style.display = "block";
            found = true;
        }
        else {
            providers[i].style.display = "none";
        }
    }
    if (!found) {
        alert("No service provider found in this location!");
    }

}
