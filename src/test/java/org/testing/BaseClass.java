package org.testing;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	public static WebDriver driver;
	
	public static  void chromeBrowser() {
WebDriverManager.chromedriver().setup();
 driver = new ChromeDriver();
	}
	
	public static void launchUrl(String url) {
driver.get(url);
	}
	
	
	
}
