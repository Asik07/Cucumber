@login
Feature: To Validate the login functionality of FaceBook Application
Background:
Given user have to Launch the facebook url through chrome browser
    @sanity
  Scenario: ToValidate the invalid username and invalid password in login
    
    When user have to enter the invalid username and invalid password
    
      | userName | greens123@gmail.com |
      | password | greens123           |
      | phoneNum |          9876543210 |
      
    And user have to click the login button
    Then user have to verify invalid credential page
    And User have to close the browser
@smoke
  Scenario: ToValidate the invalid username and invalid password in login
    When user have to enter the valid username and invalid password
    
      | username            | password  | phonenum    |
      | greens123@gmail.com | greens123 |  9876543210 |
      | java123@gmail.com   | java123   |  1234567890 |
      | python123@gmail.com | python12  | 56789875432 |
      
    And user have to click the login button
    Then user have to verify invalid credential page
    And User have to close the browser
