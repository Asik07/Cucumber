package org.step;

import java.time.Duration;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testing.BaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Stepdefinition extends BaseClass  {
 
	@Given("user have to Launch the facebook url through chrome browser")
	public void user_have_to_Launch_the_facebook_url_through_chrome_browser() {
		driver.manage().timeouts().implicitlyWait(Duration.ofMillis(3000));
		
	}

	
	@When("user have to click the login button")
	public void user_have_to_click_the_login_button() {
		driver.findElement(By.name("login")).click();
	}

	@Then("user have to verify invalid credential page")
	public void user_have_to_verify_invalid_credential_page() {
		String url = driver.getCurrentUrl();
		
		if (url.contains("privacy_mutation_token")) {
			System.out.println("invalid credential page");
		}
		else {
			System.out.println("valid credential page");
		}
		}
	

	@Then("User have to close the browser")
	public void user_have_to_close_the_browser() {
		
	}



@When("user have to enter the invalid username and valid password")
public void userHaveToEnterTheInvalidUsernameAndValidPassword() {
	driver.findElement(By.id("email")).sendKeys("python123@gmail.com");
	driver.findElement(By.name("pass")).sendKeys("python123");
}
//1D Map
@When("user have to enter the invalid username and invalid password")
public void userHaveToEnterTheInvalidUsernameAndInvalidPassword(io.cucumber.datatable.DataTable d) {
   Map<String, String> map = d.asMap(String.class, String.class);
   
	String user = map.get("userName");
	String ph = map.get("phoneNum");
	
	driver.findElement(By.id("email")).sendKeys(user);
	driver.findElement(By.name("pass")).sendKeys(ph);
	
}
//2D Map
@When("user have to enter the valid username and invalid password")
public void userHaveToEnterTheValidUsernameAndInvalidPassword(io.cucumber.datatable.DataTable d) {
  
List<Map<String, String>> list = d.asMaps();	
Map<String, String> map = list.get(2);
String user = map.get("username");
String pwd = map.get("password");

driver.findElement(By.id("emails")).sendKeys(user);
driver.findElement(By.name("pass")).sendKeys(pwd);
	
		
}

@Given("user have to click the frg pwd button")
public void userHaveToClickTheFrgPwdButton() {
}

@When("User have to enter the invalid phone Number")
public void userHaveToEnterTheInvalidPhoneNumber() {
	
}

@When("user have to click the serach button")
public void userHaveToClickTheSerachButton() {
	
}

@Then("user Have to verify the invalid credential page")
public void userHaveToVerifyTheInvalidCredentialPage() {
	
}















}
