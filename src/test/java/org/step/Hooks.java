package org.step;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.testing.BaseClass;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends BaseClass {


@After(order=30)
public static  void after4() {
driver.close();
}

	@Before(order=3)
public static void before4() {
driver.manage().window().maximize();
}
	@Before(order=1)
public static void before1() {
		chromeBrowser();
		}

	@Before(order=2)
public static void before() {
		launchUrl("https://www.facebook.com/");
		}


}
