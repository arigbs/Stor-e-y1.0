(function () {
    "use-strict";
    /*    var locator = null;
        var startURL = "http://dev.virtualearth.net/REST/v1/Locations/";
        var endURL = "?o=json&key=0nNn7QOt0t70b88pzUG5~NOX_BfvejoJJZ-h4ecfxuA~AuGtrUcPMAzWa0Yl09ghfxZJW_08iINI2OmafNDTDIvJaMAAQZlQmK2KLB2lrEIP";
        var page = WinJS.UI.Pages.define("/html/frame4add.html", {
            ready: function (element, options) {
               sharebutton.addEventListener("click", dataRequested, false);
                editbutton.addEventListener("click", editStorey, false);
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
                StoreyKey.location = name;
            })
        }
    
      
    
    
        function saveStoreyText(eventObject) {
            var input = WinJS.Utilities.query("input");
            var txtvalue = input[0].txtvalue;
            // data validation 
            writeStoreyText(txtvalue);
        }
    
        function writeStoreyText(txtvalue) {
            var storey = {};
            storey.text = txtvalue;
            storey.location = StoreyKey.location;
            StoreyKey.storeys.push(storey);
            var items = StoreyKey.storeys.slice(0, StoreyKey.storeys.length);
            var jsonString = JSON.stringify(items);
            var promise = WinJS.Application.roaming.writeText("current", jsonString);
            promise.done(function () {
                WinJS.Navigation.navigate("/html/frame4add.html");
            })
        }
    
        */

    var dataTransferManager;
    var page = WinJS.UI.Pages.define("/html/frame4add.html", {
        ready: function (element, options) {
            dataTransferManager = Windows.ApplicationModel.DataTransfer.DataTransferManager.getForCurrentView();
            sharebutton.addEventListener("click", showandShare, false);
            dataTransferManager.addEventListener("datarequested", onSharingRequested);
         
            editbutton.addEventListener("click", editStorey, false);
        },
    /*    unload: function() {
            dataTransferManager.removeEventListener("datarequested", onSharingRequested);
            }

*/
            
        });

    
        //StoreyKey.storeys
  /*  
  function registerForShare() {
    var dataTransferManager = Windows.ApplicationModel.DataTransfer.DataTransferManager.getForCurrentView();
    dataTransferManager.addEventListener("datarequested", onSharingRequested);
  }
    unload: function() {
        dataTransferManager.removeEventListener("datarequested", onSharingRequested);
    };
  */
    function showandShare() {
        Windows.ApplicationModel.DataTransfer.DataTransferManager.showShareUI();
    }

    var SHARE_TITLE = "My Stor[e]y"
    //Share Contract for Storey
    function onSharingRequested(e) {
        
        var playername = document.getElementById("frame3addpage");
        var request = e.request;
        request.data.properties.title = "SHARE_TITLE";
        request.data.setText("Hello" + playername + "!");
        //request.data.setBitmap(Windows.Storage.Streams.RandomAccessStreamReference.createFromUri(imagePath));
        
       }

    
     
        // sharebutton

     function editStorey(eventObject) {
         WinJS.Navigation.navigate("/html/frame3add.html", "frame4add");
     }

     


    function transitionBetweenPages(eventObject) {
        WinJS.UI.Animation.exitPage(addpage, null).done(function () {
            WinJS.Navigation.navigate("/html/frame3add.html", "frame4add");
        })
        
    }

})();