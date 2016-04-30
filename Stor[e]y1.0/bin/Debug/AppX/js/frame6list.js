(function () {
    "use strict";
    var systemNavigationManager = Windows.UI.Core.SystemNavigationManager.getForCurrentView();
    var page = WinJS.UI.Pages.define("/html/frame6list.html", {
        ready: function (element, options) {
            //systemNavigationManager.searchbutton.addEventListener("click", transitionBetweenPages, false);
            returnbutton.addEventListener("click", returnHome, false);
            systemNavigationManager.addEventListener("backrequested", backRequested);
            systemNavigationManager.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.visible;
        },
        unload: function () {
            //systemNavigationManager.searchbutton.removeEventListener("click", transitionBetweenPages);
            systemNavigationManager.removeEventListener("backrequested", backRequested);
            systemNavigationManager.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.collapsed;
        }
    });

    function returnHome(eventObject) {
        WinJS.UI.Animation.exitPage(list, null).done(function () {
        WinJS.Navigation.navigate("/html/homeselector.html", "frame6list");
        })
    }

    function transitionBetweenPages(eventObject) {
        WinJS.UI.Animation.exitPage(addpage, null).done(function () {
            WinJS.Navigation.navigate("/html/homeselector.html", "frame6list");
        })

    }

    function backRequested() {
        WinJS.UI.Animation.exitPage(list, null).done(function () {
            WinJS.Navigation.navigate("/html/home.html", "frame6list");

        })
    }

    WinJS.UI.processAll();
})();
