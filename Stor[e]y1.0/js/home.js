(function () {
    "use strict";
    var page = WinJS.UI.Pages.define("/html/home.html", {
        ready: function (element, options) {
       //   addbutton.addEventListener("click", transitionBetweenPages, false);  
       //   allbutton.addEventListener("click", transitionBetweenPages, false);
        //    returnbutton.addEventListener("click", returnHome, false);
            frame2button.addEventListener("click", transitionBetweenPages, false);
            enterbutton.addEventListener("click", transitionBetweenPages, false);
        },

        unload: function () {
      //    addbutton.removeEventListener("click", transitionBetweenPages);
      //    allbutton.removeEventListener("click", transitionBetweenPages);
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
        })
        
    }



    

})();