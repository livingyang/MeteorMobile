MeteorGap
=========

An approach for use Meteor into PhoneGap/Cordova.

I use iframe to contain meteor client, and use postMessage to send message to the phonegap app.

The point is: javascript can eval everything into a string. So I define the evalString at meteor and send to phonegap to eval it.

*Maybe I will predefine some useful function to replace eval everything*

Frameworks version
=========

Meteor: 0.6.5.1
PhoneGap: 3.1.0
xCode: 4.6.3


Getting started
=========

## 1 run the meteor server
- cd meteor/
- meteor

## 2 add Media plugin
- cd phonegap/
- cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-media.git

## 3 build phonegap project
- phonegap build ios

*now you can run the phonegap app and see how the meteor send message to phonegap*

