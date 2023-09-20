$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:FbForgotten.feature");
formatter.feature({
  "name": "To Validate the forgotten password functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@fgtpwd"
    }
  ]
});
formatter.scenario({
  "name": "to Validate the invalid PhoneNumber",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@fgtpwd"
    },
    {
      "name": "@regresion"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user have to Launch the facebook url through chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_have_to_Launch_the_facebook_url_through_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to click the frg pwd button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.userHaveToClickTheFrgPwdButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to enter the invalid phone Number",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.userHaveToEnterTheInvalidPhoneNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to click the serach button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.userHaveToClickTheSerachButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Have to verify the invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.userHaveToVerifyTheInvalidCredentialPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_have_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:FbLogin.feature");
formatter.feature({
  "name": "To Validate the login functionality of FaceBook Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user have to Launch the facebook url through chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_have_to_Launch_the_facebook_url_through_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ToValidate the invalid username and invalid password in login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user have to enter the invalid username and invalid password",
  "rows": [
    {
      "cells": [
        "userName",
        "greens123@gmail.com"
      ]
    },
    {
      "cells": [
        "password",
        "greens123"
      ]
    },
    {
      "cells": [
        "phoneNum",
        "9876543210"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.userHaveToEnterTheInvalidUsernameAndInvalidPassword(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to verify invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_have_to_verify_invalid_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_have_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user have to Launch the facebook url through chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_have_to_Launch_the_facebook_url_through_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ToValidate the invalid username and invalid password in login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user have to enter the valid username and invalid password",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "phonenum"
      ]
    },
    {
      "cells": [
        "greens123@gmail.com",
        "greens123",
        "9876543210"
      ]
    },
    {
      "cells": [
        "java123@gmail.com",
        "java123",
        "1234567890"
      ]
    },
    {
      "cells": [
        "python123@gmail.com",
        "python12",
        "56789875432"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.userHaveToEnterTheValidUsernameAndInvalidPassword(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#emails\"}\n  (Session info: chrome\u003d116.0.5845.188)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.10.0\u0027, revision: \u0027c14d967899\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4b71522be4a9102b8ff645aa5e475e20, findElement {using\u003did, value\u003demails}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.188, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61146}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61146/devtoo..., se:cdpVersion: 116.0.5845.188, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4b71522be4a9102b8ff645aa5e475e20\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:199)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:132)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:51)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:531)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.step.Stepdefinition.userHaveToEnterTheValidUsernameAndInvalidPassword(Stepdefinition.java:75)\r\n\tat ✽.user have to enter the valid username and invalid password(file:FbLogin.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user have to verify invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_have_to_verify_invalid_credential_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User have to close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_have_to_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});