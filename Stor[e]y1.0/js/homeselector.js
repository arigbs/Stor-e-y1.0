(function () {
    "use strict";
    var page = WinJS.UI.Pages.define("/html/homeselector.html", {
        ready: function (element, options) {
            buildbutton.addEventListener("click", transitionBetweenPages, false);
            viewbutton.addEventListener("click", transitionBetweenPages, false);
        },

        unload: function () {
            buildbutton.removeEventListener("click", transitionBetweenPages);
            viewbutton.removeEventListener("click", transitionBetweenPages);
        }

    });

    function transitionBetweenPages(eventObject) {
        var id = eventObject.currentTarget.id;
        console.log("Button id " + id);
        var url;

        if (id == "buildbutton") {
            url = "/html/frame2add.html";
        } else if (id == "viewbutton") {
            url = "/html/frame6list.html";
        } else {
            url = "/html/list.html";
        }
        WinJS.UI.Animation.exitPage(homepage, null).done(function () {
            WinJS.Navigation.navigate(url, "homeSelector");
        })
        
    }
    

})();