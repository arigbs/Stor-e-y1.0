(function () {
    "use-strict";
    var locator = null;
    var startURL = "http://dev.virtualearth.net/REST/v1/Locations/";
    var endURL = "?o=json&key=0nNn7QOt0t70b88pzUG5~NOX_BfvejoJJZ-h4ecfxuA~AuGtrUcPMAzWa0Yl09ghfxZJW_08iINI2OmafNDTDIvJaMAAQZlQmK2KLB2lrEIP";
    var page = WinJS.UI.Pages.define("/html/frame3add.html", {
        ready: function (element, options) {
            saveTextbutton.addEventListener("click", saveStoreyText, false);
            returnbutton.addEventListener("click", returnHome, false);
        //    getLoc();
          
        },
        unload: function () {

        }
    });

    function getLoc() {
        if (locator == null) {
            locator = new Windows.Devices.Geolocation.Geolocator();
        }
        if (locator != null) {
            locator.getGeopositionAsync().then(getPositionHandler, errorHandler);
        }
    }

    function getPositionHandler(pos) {
        var point = pos.coordinate.point.position;
        console.log("Lat: " + point.latitude);
        console.log("Long: " + point.longitude);
        var lat = point.latitude;
        var long = point.longitude;
        var url = startURL + lat + "," + long + endURL;
        console.log("URL for BING " + url);
        WinJS.xhr({
            url: url,
            responseType:"json"
        }).done(function (result)
        {
            var name = result.response.resourceSets[0].resources[0].name;
            console.log("Name of Place :" + name);
            StoreyTextKey.location = name;
        })
    }

    

    function saveStoreyText(eventObject) {
        var input = WinJS.Utilities.query("input");
        var value = input[0].value;
        // data validation 
        writeStoreyText(value);
    }

    function writeStoreyText(value) {
        var storey = {};
        storey.text = value;
        storey.location = StoreyTextKey.location;
        StoreyTextKey.storeys.push(storey);
        var items = StoreyTextKey.storeys.slice(0, StoreyTextKey.storeys.length);
        var jsonString = JSON.stringify(items);
        var promise = WinJS.Application.roaming.writeText("current", jsonString);
        promise.done(function () {
            WinJS.Navigation.navigate("/html/frame4add.html");
        })
    }


     function returnHome(eventObject) {
        WinJS.Navigation.navigate("/html/home.html", "frame3add");
    }

    function transitionBetweenPages(eventObject) {
        WinJS.UI.Animation.exitPage(addpage, null).done(function () {
            WinJS.Navigation.navigate("/html/home.html", "frame3add");
        })
        
    }

})();