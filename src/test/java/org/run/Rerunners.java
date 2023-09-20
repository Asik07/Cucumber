package org.run;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features="@Rerun\\fb.txt",
glue="org.step",monochrome=true,dryRun=false,strict=false,snippets=SnippetType.CAMELCASE,
plugin= {"pretty","html:AsikCucumber\\Reports\\HTML",
		"junit:AsikCucumber\\Reports\\Junit\\fb.xml",
		 "json:AsikCucumber\\Reports\\Json\\fb.json",
		 "rerun:Rerun\\fb.txt"}
)
public class Rerunners {
	@AfterClass
	public static  void tc() {
    Report.getJvmReport();
	}
}
