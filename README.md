# angularSimpleReCaptcha
Simple ReCaptcha directive for Angular to support Google recaptcha's

Needs an ng-model to keep the response of the recaptcha, sets the $error when it's not a valid user.
Resets after timeout of the google Recaptcha.

To make this system more bulletproof, you should use the respone on your server to verify
if the user isn't a robot

## Example Usage:

```
<form name="[yourForm]">
...
  <simple-recaptcha ng-model="loginCtrl.chaptcha"  site-key="[your-public-key-for-google-recaptcha]"></simple-recaptcha>
...
</form>
```

Catching the error of the captcha.

```
[yourform].$error.captcha
```

## Bower package:

```
bower install angularSimpleRecaptcha
```
