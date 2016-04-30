(function () {
    "use strict";

  /* var page = WinJS.UI.Pages.define("/html/homeselector.html", {
        ready: function (element, options) {
            searchbutton.addEventListener("click", transitionBetweenPages, false);
        },

        unload: function () {
            searchbutton.removeEventListener("click", transitionBetweenPages);
        }

    });

    function transitionBetweenPages(eventObject) {
        var id = eventObject.currentTarget.id;
        console.log("Button id " + id);
        var url;

        if (id == "searchbutton") {
            url = "/html/frame2add.html";
        } else if (id == "viewbutton") {
            url = "/html/frame6list.html";
        } else {
            url = "/html/list.html";
        }
    }   

    */

    var systemNavigationManager = Windows.UI.Core.SystemNavigationManager.getForCurrentView();
    var page = WinJS.UI.Pages.define("/html/frame6list.html", {
        ready: function (element, options) {
            //systemNavigationManager.searchbutton.addEventListener("click", transitionBetweenPages, false);
            systemNavigationManager.addEventListener("backrequested", backRequested);
            systemNavigationManager.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.visible;
        },
        unload: function () {
            //systemNavigationManager.searchbutton.removeEventListener("click", transitionBetweenPages);
            systemNavigationManager.removeEventListener("backrequested", backRequested);
            systemNavigationManager.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.collapsed;
        }
    });

    function backRequested() {
        WinJS.UI.Animation.exitPage(list, null).done(function () {
            WinJS.Navigation.navigate("/html/home.html", "frame6list");

        })
    }

    function backRequested() {
        WinJS.UI.Animation.exitPage(list, null).done(function () {
            WinJS.Navigation.navigate("/html/home.html", "frame6list");

        })
    }

})();

/*
var page = WinJS.UI.Pages.define("/html/home.html", {
    ready: function (element, options) {
        addbutton.addEventListener("click", transitionBetweenPages, false);
        allbutton.addEventListener("click", transitionBetweenPages, false);
        frame2button.addEventListener("click", transitionBetweenPages, false);
        enterbutton.addEventListener("click", transitionBetweenPages, false);
    },

    unload: function () {
        addbutton.removeEventListener("click", transitionBetweenPages);
        allbutton.removeEventListener("click", transitionBetweenPages);
        frame2button.removeEventListener("click", transitionBetweenPages);
        enterbutton.removeEventListener("click", transitionBetweenPages);
    }

});
function transitionBetweenPages(eventObject) {
    var id = eventObject.currentTarget.id;
    console.log("Button id " + id);
    var url;

    if (id == "addbutton") {
        url = "/html/add.html";
    } else if (id == "frame2button") {
        url = "/html/frame2add.html";
    } else if (id == "enterbutton") {
        url = "/html/homeselector.html";
    } else {
        url = "/html/list.html";
    }
    WinJS.UI.Animation.exitPage(homepage, null).done(function () {
        WinJS.Navigation.navigate(url, "home");
    }
    )();
}

*/





/*
WinJS.Namespace.define("Sample.ListView", {
    data: new WinJS.Binding.List(items)
});
WinJS.UI.processAll();
*/