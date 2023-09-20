package org.run;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class Report {

	public static  void getJvmReport() {
      // mention the target folder location 
		File f= new File("AsikCucumber\\Reports\\JVM");
		
	// add the details from report by using configuration class
		Configuration c = new Configuration(f, "facebook");
		c.addClassifications("Employee Name ", "asik");
		c.addClassifications("register Id", "12345");
		c.addClassifications("plateform", "windows");
		
	// add the json path into list 
		List <String>l = new ArrayList();
		l.add("AsikCucumber\\Reports\\Json\\fb.json");
		
		// object creation ReportBuilder class then call generateReport()-m
		
		ReportBuilder r = new ReportBuilder(l, c);
		r.generateReports();

		
	}
}
