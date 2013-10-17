MeteorGap
=========

An approach for use Meteor into PhoneGap/Cordova.

I use meteor to manage cordova content, and create a iframe to connect meteor server. 

Both of the cordova start page and meteor page are in same origin, So I can access cordova in meteor code.

Frameworks version
=========

- Meteor: 0.6.6.1
- PhoneGap: 3.1.0
- Xcode: 4.6.3


Quick start
=========

### 1 run the meteor server
- cd meteor/
- meteor

### 2 run cordova ios project
- cd cordova/
- cordova run ios

*now the app is running and you can see how to use cordova with meteor*

Develop start
=========

### 1 create cordova project
- cordova create cordova

### 2 create meteor project
- meteor create meteor

### 3 add iframe to ref meteor server
- add `<iframe src="/"></iframe>`  to  `cordova/www/index.html`

### 4 change cordova start page in `cordova/www/config.xml`
- `<content src="http://localhost:3000/www/index.html" />`

### 5 build cordova
- cordova build ios

### 6 create meteor public dir to contain cordova content
- mkdir meteor/public
- cp cordova/platforms/ios/www meteor/public/www

### 7 run meteor
- meteor run

### 8 run cordova app
- cordova run ios

### 9 now you can access cordova directly by meteor code, have enjoy!

