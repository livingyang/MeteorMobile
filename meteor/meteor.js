if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to meteor.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");

      // console.log(window);
      var onSuccess = function () {
        alert("onSuccess");
      }
      new window.top.Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3", onSuccess).play();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
