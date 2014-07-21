
package bdd.cucumber.jvm;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        features = {"src/main/java/bdd/cucumber/jvm"}
)
public class  CucumberRunner {
}