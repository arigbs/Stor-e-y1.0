(function () {
    "use-strict";
   // var startDate, endDate, datePicker;
    var locator = null;
    var startURL = "http://dev.virtualearth.net/REST/v1/Locations/";
    var endURL = "?o=json&key=0nNn7QOt0t70b88pzUG5~NOX_BfvejoJJZ-h4ecfxuA~AuGtrUcPMAzWa0Yl09ghfxZJW_08iINI2OmafNDTDIvJaMAAQZlQmK2KLB2lrEIP";
    var page = WinJS.UI.Pages.define("/html/frame2add.html", {
        ready: function (element, options) {
            saveTitlebutton.addEventListener("click", saveStoreyTitle, false);
            returnbutton.addEventListener("click", returnHome, false);
            //datepicker.addEventListener("change", handleChange, false);
            //datePicker = datepicker.winControl;
            //startDate = datePicker.current.toLocaleDateString();
            // console.log("Start date" + startDate);
            getLoc();
          
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
            StoreyTitleKey.location = name;
        })
    }

    function errorHandler(e) {
        var status = locator.locationStatus;
        switch (status)
        {
            case Windows.Devices.Geolocation.PositionStatus.ready:
                console.log("Status:ready");
                break;
            case Windows.Devices.Geolocation.PositionStatus.notInitialized:
                console.log("Status:Not Initialized, have not requested location data");
                break;



        }
    }

    function saveStoreyTitle(eventObject) {
        var input = WinJS.Utilities.query("input");
        var value = input[0].value;
        // data validation 
        writeStoreyTitle(value);
    }

    function writeStoreyTitle(value) {
        var storey = {};
        storey.title = value;
  //      storey.from = startDate;
  //      storey.to = endDate;
        storey.location = StoreyTitleKey.location;
        StoreyTitleKey.storeys.push(storey);
        var items = StoreyTitleKey.storeys.slice(0, StoreyTitleKey.storeys.length);
        var jsonString = JSON.stringify(items);
        var promise = WinJS.Application.roaming.writeText("current", jsonString);
        promise.done(function () {
            WinJS.Navigation.navigate("/html/frame3add.html");
        })
    }


  /*  function handleChange(eventObject) {
        endDate = datePicker.current.toLocaleDateString();
        console.log("end Date "+endDate)
    } */

    function returnHome(eventObject) {
        WinJS.Navigation.navigate("/html/home.html", "frame2add");
    }

    function transitionBetweenPages(eventObject) {
        WinJS.UI.Animation.exitPage(addpage, null).done(function () {
            WinJS.Navigation.navigate("/html/home.html", "frame2add");
        })
        
    }

})();