package cucumberjvm;

import static org.junit.Assert.*;

import java.util.List;
import java.util.concurrent.TimeUnit;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import org.openqa.selenium.firefox.FirefoxDriver;


public class HomePageStepDefinition {

    private int no_of_items_available_per_category = 0;
    private int no_of_items_listed_per_category = 0 ;
    private String product_description = "";
    private String category_name = "";
    private WebDriver driver;

    @Before
    public void startBrowser()
    {
        driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        Utils.driver = driver;
    }

    @Given("^consumer is in homepage \"(.*?)\"$")
    public void consumer_is_in_homepage(String homepage_url) throws Throwable {
        driver.get(homepage_url);
     }

    @When("^list of categories exists in the left panel$")
    public void list_of_categories_exists_in_the_left_panel() throws Throwable {
        boolean element_present = false;
        try {
            driver.findElement(By.id("xpath_for_first_categories"));
            element_present = true;
        } catch (NoSuchElementException e) {

        }
        assertTrue(element_present);

    }

    @Then("^number of items available per category should be shown beside the category name$")
    public void number_of_items_available_per_category_should_be_shown_beside_the_category_name() throws Throwable {
         WebElement first_category = driver.findElement(By.xpath("xpath_for_first_categories"));
         category_name = first_category.getText();
         parse_items(category_name);
    }

    private void parse_items(String category_name)
    {
        int start = category_name.indexOf("\\(") ;
        String no_of_items_available = category_name.substring(start +1 , category_name.length() - 1);
        assertTrue(no_of_items_available.matches("[-+]?\\d*\\.?\\d+"));
        this.no_of_items_available_per_category = Integer.valueOf(no_of_items_available);
    }

    @Then("^a category named \"(.*?)\" exists$")
    public void a_category_named_exists(String category_name ) throws Throwable {
        try {
            List<WebElement> category = driver.findElements(By.linkText(category_name));
            assertTrue(category.size() > 0);
        }
        catch (NoSuchElementException e) {
            assertTrue("No element with the sepecified category exists", false);
        }
    }

    @When("^consumer opens the category named \"(.*?)\"$")
    public void consumer_opens_the_category_named(String category_name) throws Throwable {
        driver.findElement(By.linkText(category_name)).click();
    }

    @Then("^the list of products under the category \"(.*?)\" should be shown$")
    public void the_list_of_products_under_the_category_should_be_shown(String category_name) throws Throwable {
        WebElement page_title = driver.findElement(By.xpath("xpath for the title of the content page"));
        assertEquals(page_title.getText(), category_name);
        List<WebElement> products_list = elements_list("xpath of product list table");
        assertTrue(products_list.size() > 0);
        no_of_items_listed_per_category = products_list.size() ;
    }

    @Then("^the number of products shown should match the available items for the chosen category$")
    public void the_number_of_products_shown_should_match_the_available_items_for_the_chosen_category() throws Throwable {
        assertTrue(no_of_items_listed_per_category  == no_of_items_available_per_category);
    }

    @Then("^the home page should show only top (\\d+)  best sellers products preview$")
    public void the_home_page_should_show_only_top_best_sellers_products_preview(int best_sellers_count) throws Throwable {
        List<WebElement> products_list = elements_list("xpath for the products list table");
        assertTrue(products_list.size() == best_sellers_count);
       }

    @When("^consumer navigates to a product by selecting the image of a product$")
    public void consumer_navigates_to_a_product_by_selecting_the_image_of_a_product() throws Throwable {
        WebElement first_product = driver.findElement(By.xpath("xpath of the first product image in the page"));
        first_product.click();
    }

    @Then("^the product page of the selected product should be shown$")
    public void the_product_page_of_the_selected_product_should_be_shown() throws Throwable {
       String  product_page_title  = driver.findElement(By.xpath("xpath for the product title")).getText();
        assertEquals(product_page_title ,product_description);
    }

    @When("^consumer navigates to a product by selecting the link of a product$")
    public void consumer_navigates_to_a_product_by_selecting_the_link_of_a_product() throws Throwable {
        WebElement first_product = driver.findElement(By.xpath("xpath of the first product link in the page"));
        first_product.click();

    }

    @Then("^price of the product should be shown in default currency \"(.*?)\"$")
    public void price_of_the_product_should_be_shown_in_default_currency(String default_currency) throws Throwable {
        String price_value = driver.findElement(By.xpath("xpath for the price of the product")).getText();
        if ( default_currency.equals("Euro")) {
            assertTrue(price_value.contains("€"));
        }
    }

    @When("^no categories  are available$")
    public void no_categories_are_available() throws Throwable {
        List<WebElement> category_list = elements_list("xpath for category table");
        assertTrue(category_list.size() == 0);
    }

    @Then("^a message should be shown saying \"(.*?)\"$")
    public void a_message_should_be_shown_saying(String no_category_message) throws Throwable {
        String pageSource_text = driver.getPageSource();
        assertTrue(pageSource_text.contains(no_category_message));
    }

    @When("^a category named \"(.*?)\" exists with no items available$")
    public void a_category_named_exists_with_no_items_available(String category_with_no_items) throws Throwable {
        WebElement category = driver.findElement(By.xpath(category_with_no_items));
        category_name = category.getText();
        parse_items(category_name);
    }

    @Then("^the category should be shown with zero items besides the category name$")
    public void the_category_should_be_shown_with_zero_items_besides_the_category_name() throws Throwable {
        assertTrue(no_of_items_available_per_category == 0 );
    }

    @Then("^the category \"(.*?)\" should not be a link$")
    public void the_category_should_not_be_a_link(String category_name) throws Throwable {
        WebElement category = driver.findElement(By.xpath(category_name));
        assertTrue(!category.isEnabled());
    }

    @Then("^the list of categories should be shown in Alphabetical order of the category name$")
    public void the_list_of_categories_should_be_shown_in_Alphabetical_order_of_the_category_name() throws Throwable {
        List<WebElement> category_list = elements_list("xpath for category table");
        String[] category_name = new String[10];

        int i = 0;
        for (WebElement a : category_list) {
            category_name[i] = a.getText();
            i++;
        }

        boolean is_sorted = false;
        for (i = 0; i < category_name.length; i++) ;
        {

            if (category_name[i].charAt(0) < category_name[i + 1].charAt(0)) {

                is_sorted = true;
            }
            assertTrue(is_sorted);
        }
    }

    @Then("^only (\\d+) categories should be shown$")
    public void only_categories_should_be_shown(int category_count) throws Throwable {

        List<WebElement> no_of_categories = elements_list("category table xpath");
        assertTrue(no_of_categories.size() == category_count);
     }

    @Then("^size of the name of the category should be less than (\\d+) characters$")
    public void size_of_the_name_of_the_category_should_be_less_than_characters(int arg1) throws Throwable {
        List<WebElement> category_list =  elements_list("category table xpath");
        String[] category_name = new String[10];

        int i = 0;
        for (WebElement a : category_list) {
            category_name[i] = a.getText();
            assertTrue(category_name[i].length() < 36);
            i++;
        }
    }

    @When("^a category \"(.*?)\" exceeding (\\d+) characters exists$")
    public void a_category_exceeding_characters_exists(String category_name, int no_of_char_category) throws Throwable {

        WebElement category = driver.findElement(By.linkText(category_name));
        assertTrue(category.getText().length() == no_of_char_category);
    }

    @Then("^the category panel should be scrollable$")
    public void the_category_panel_should_be_scrollable() throws Throwable {
        boolean element_present = false;
        try {
            driver.findElement(By.id("category_scrollable_link"));
            element_present = true;
        } catch (NoSuchElementException e) {

        }
        assertTrue(element_present);
    }
    private List<WebElement> elements_list(String elements_path){
        return driver.findElements(By.xpath(elements_path));
    }

    @After
    public void closeAndExit()
    {
        driver.quit();
    }
}