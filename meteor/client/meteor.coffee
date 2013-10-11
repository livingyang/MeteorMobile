Template.hello.greeting = ->
	"Welcome to app."

Template.hello.isDeviceReady = ->
	MeteorGap.isDeviceReady()

Template.hello.events "click input": ->
	MeteorGap.postEvalMessage "new Media(\"http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3\").play();"

Meteor.startup ->
	MeteorGap.start()

