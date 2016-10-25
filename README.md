# angularSimpleReCaptcha
Simple ReCaptcha directive for Angular to support Google recaptcha's

Needs an ng-model to keep the response of the recaptcha, sets the $error when it's not a valid user.
Resets after timeout of the google Recaptcha.

To make this system more bulletproof, you should use the respone on your server to verify
if the user isn't a robot

## Authors
- Sander Elias (https://github.com/SanderElias)
- Jeroen Bastijns (https://github.com/bastijns-jeroen)

## Example Usage

Load the Google ReCaptcha script:
```
<script type="text/javascript" src="https://www.google.com/recaptcha/api.js"></script>

```

Load the angularSimpleRecaptcha script after loading AngularJs:
```
<script type="text/javascript" src="bower_components/angular-simple-recaptcha/dist/angular-simple-recaptcha.min.js"></script>
```

Add angular simple recaptcha to your module dependencies
```
angular.module('yourModule', ['AngularSimpleRecaptcha'])
```

Use it where you want!
```
<form name="[yourForm]">
...
  <simple-recaptcha ng-model="loginCtrl.chaptcha" site-key="[your-public-key-for-google-recaptcha]" captcha-ready="captchaReady(reset)"></simple-recaptcha>
...
</form>
```

Catching the error of the captcha.

```
[yourform].$error.captcha
```

## Bower package

```
bower install angular-simple-recaptcha
```
