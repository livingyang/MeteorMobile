if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to meteor.";
  };

  Template.hello.events({
    'click input' : function () {
      console.log("You pressed the button");
      if (window === window.top) {
        window.postMessage("send by meteor", "*");
      } else {
        var evalString = 'new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3").play();';
        window.top.postMessage(evalString, "*");
      };
    }
  });

  Meteor.startup(function () {
    window.addEventListener("message", function (e) {
      alert("Meteor receive: " + e.data);
      console.log(e);
    }, false);
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
