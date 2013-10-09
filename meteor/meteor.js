if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to meteor.";
  };

  Template.hello.events({
    'click input' : function () {
      console.log("You pressed the button");
      if (window === window.top) {
        window.postMessage("send by meteor", "*");
      } else{
        window.top.postMessage("send by meteor", "*");
      };
    }
  });

  Meteor.startup(function () {
    window.addEventListener("message", function (e) {
      alert("Meteor receive: " + e.data);
    }, false);
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
