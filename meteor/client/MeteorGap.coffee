MeteorGap = {}
@MeteorGap = MeteorGap

MeteorGap.events = {}

MeteorGap.bindEvent = (eventName, eventFunc) ->
	MeteorGap.events[eventName] = eventFunc if typeof eventName is "string" and typeof eventFunc is "function"
	
MeteorGap.isDeviceReady = ->
	true is Session.get "isDeviceReady"

MeteorGap.postEvalMessage = (evalString) ->
	window.top.postMessage evalString, "*"

MeteorGap.start = ->
	MeteorGap.bindEvent "deviceready", ->
		console.log "Meteor: deviceready receive!!"
		Session.set "isDeviceReady", true

	window.addEventListener "message", (e) ->
		MeteorGap.events[e.data.event]?(e.data)
		console.log "Meteor receive message: #{e.data}"
	, false

	phonegapRunScript = ->
		meteorWindow = document.getElementsByTagName("iframe")?[0]?.contentWindow
		return if not meteorWindow?

		bindEventToMeteor = (eventName) ->
			document.addEventListener eventName, (-> meteorWindow.postMessage event: eventName, "*"), false

		bindEventToMeteor "deviceready"
		bindEventToMeteor "pause"
		bindEventToMeteor "resume"

	if window.top isnt window
		window.top.postMessage "(#{String(phonegapRunScript)})()", "*"
