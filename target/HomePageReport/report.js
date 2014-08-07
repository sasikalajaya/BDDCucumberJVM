$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/cucumberjvm/HomePage.feature");
formatter.feature({
  "id": "home-page-functionality",
  "description": "\r\nAs a consumer\r\nI want to view the homepage to understand about the website\r\nso that I can shop easily",
  "name": "Home page functionality",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 7144220729,
  "status": "passed"
});
formatter.scenario({
  "id": "home-page-functionality;consumer-can-view-the-list-of-categories-and-navigate-to-a-specific-category",
  "description": "",
  "name": "Consumer can view the list of categories and navigate to a specific category",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario",
  "comments": [
    {
      "value": "# acceptance scenarios",
      "line": 7
    }
  ]
});
formatter.step({
  "name": "consumer is in homepage \"https://www.zencart.com\"",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "list of categories exists in the left panel",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "number of items available per category should be shown beside the category name",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "a category named \"Books\" exists",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "consumer opens the category named \"Books\"",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "the list of products under the category \"Books\" should be shown",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "the number of products shown should match the available items for the chosen category",
  "keyword": "And ",
  "line": 17
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.zencart.com",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefinition.consumer_is_in_homepage(String)"
});
formatter.result({
  "duration": 4294632323,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.list_of_categories_exists_in_the_left_panel()"
});
formatter.result({
  "duration": 60391579550,
  "status": "failed",
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat cucumberjvm.HomePageStepDefinition.list_of_categories_exists_in_the_left_panel(HomePageStepDefinition.java:51)\r\n\tat ✽.When list of categories exists in the left panel(src/test/resources/cucumberjvm/HomePage.feature:12)\r\n"
});
formatter.match({
  "location": "HomePageStepDefinition.number_of_items_available_per_category_should_be_shown_beside_the_category_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 18
    }
  ],
  "location": "HomePageStepDefinition.a_category_named_exists(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 35
    }
  ],
  "location": "HomePageStepDefinition.consumer_opens_the_category_named(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 41
    }
  ],
  "location": "HomePageStepDefinition.the_list_of_products_under_the_category_should_be_shown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefinition.the_number_of_products_shown_should_match_the_available_items_for_the_chosen_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 322304248,
  "status": "passed"
});
formatter.before({
  "duration": 4428554728,
  "status": "passed"
});
formatter.scenario({
  "id": "home-page-functionality;consumer-can-view-the-top-10-best-seller-products-preview-and-navigate-to-a-product-detail-screen-by-selecting-the-product-image",
  "description": "",
  "name": "Consumer can view the top 10 best seller products preview and navigate to a product detail screen by selecting the product image",
  "keyword": "Scenario",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "consumer is in homepage \"https://www.zencart.com\"",
  "keyword": "Given ",
  "line": 21
});
formatter.step({
  "name": "the home page should show only top 10  best sellers products preview",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "consumer navigates to a product by selecting the image of a product",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "the product page of the selected product should be shown",
  "keyword": "Then ",
  "line": 24
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.zencart.com",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefinition.consumer_is_in_homepage(String)"
});
formatter.result({
  "duration": 2690364848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "HomePageStepDefinition.the_home_page_should_show_only_top_best_sellers_products_preview(int)"
});
formatter.result({
  "duration": 269436923,
  "status": "failed",
  "error_message": "org.openqa.selenium.InvalidSelectorException: The given selector xpath for the products list table is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression xpath for the products list table because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nCommand duration or timeout: 265 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027Sasikala-PC\u0027, ip: \u0027192.168.1.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: 4622282d-1f29-4f5a-919f-793e4133b86a\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dXP, databaseEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, javascriptEnabled\u003dtrue, acceptSslCerts\u003dtrue, handlesAlerts\u003dtrue, browserName\u003dfirefox, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d31.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:377)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:453)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:340)\r\n\tat cucumberjvm.HomePageStepDefinition.elements_list(HomePageStepDefinition.java:225)\r\n\tat cucumberjvm.HomePageStepDefinition.the_home_page_should_show_only_top_best_sellers_products_preview(HomePageStepDefinition.java:102)\r\n\tat ✽.Then the home page should show only top 10  best sellers products preview(src/test/resources/cucumberjvm/HomePage.feature:22)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: The given selector xpath for the products list table is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression xpath for the products list table because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027Sasikala-PC\u0027, ip: \u0027192.168.1.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.annotateInvalidSelectorError_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous7664018993893835013webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9444:5)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementsInternal_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous7664018993893835013webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9502:5)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElements(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous7664018993893835013webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9506:3)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous7664018993893835013webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11455:16)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous7664018993893835013webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11460:7)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous7664018993893835013webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11402:5)\r\n"
});
formatter.match({
  "location": "HomePageStepDefinition.consumer_navigates_to_a_product_by_selecting_the_image_of_a_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefinition.the_product_page_of_the_selected_product_should_be_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 256564798,
  "status": "passed"
});
formatter.before({
  "duration": 4296810326,
  "status": "passed"
});
formatter.scenario({
  "id": "home-page-functionality;consumer-can-view-the-top-10-best-seller-products-preview-and-navigate-to-a-product-detail-screen-by-selecting-the-link",
  "description": "",
  "name": "Consumer can view the top 10 best seller products preview and navigate to a product detail screen by selecting the link",
  "keyword": "Scenario",
  "line": 26,
  "type": "scenario"
});
formatter.step({
  "name": "consumer is in homepage \"https://www.zencart.com\"",
  "keyword": "Given ",
  "line": 28
});
formatter.step({
  "name": "the home page should show only top 10  best sellers products preview",
  "keyword": "Then ",
  "line": 29
});
formatter.step({
  "name": "consumer navigates to a product by selecting the link of a product",
  "keyword": "When ",
  "line": 30
});
formatter.step({
  "name": "the product page of the selected product should be shown",
  "keyword": "Then ",
  "line": 31
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.zencart.com",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefinition.consumer_is_in_homepage(String)"
});
formatter.result({
  "duration": 2825174785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "HomePageStepDefinition.the_home_page_should_show_only_top_best_sellers_products_preview(int)"
});
formatter.result({
  "duration": 235737897,
  "status": "failed",
  "error_message": "org.openqa.selenium.InvalidSelectorException: The given selector xpath for the products list table is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression xpath for the products list table because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nCommand duration or timeout: 235 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027Sasikala-PC\u0027, ip: \u0027192.168.1.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: fd5671eb-4359-4b58-afb3-2436bc28065d\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dXP, databaseEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, javascriptEnabled\u003dtrue, acceptSslCerts\u003dtrue, handlesAlerts\u003dtrue, browserName\u003dfirefox, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d31.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:377)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:453)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:340)\r\n\tat cucumberjvm.HomePageStepDefinition.elements_list(HomePageStepDefinition.java:225)\r\n\tat cucumberjvm.HomePageStepDefinition.the_home_page_should_show_only_top_best_sellers_products_preview(HomePageStepDefinition.java:102)\r\n\tat ✽.Then the home page should show only top 10  best sellers products preview(src/test/resources/cucumberjvm/HomePage.feature:29)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: The given selector xpath for the products list table is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression xpath for the products list table because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027Sasikala-PC\u0027, ip: \u0027192.168.1.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.annotateInvalidSelectorError_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous8362165289196668089webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9444:5)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementsInternal_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous8362165289196668089webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9502:5)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElements(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous8362165289196668089webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9506:3)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous8362165289196668089webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11455:16)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous8362165289196668089webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11460:7)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous8362165289196668089webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11402:5)\r\n"
});
formatter.match({
  "location": "HomePageStepDefinition.consumer_navigates_to_a_product_by_selecting_the_link_of_a_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefinition.the_product_page_of_the_selected_product_should_be_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 243876961,
  "status": "passed"
});
formatter.before({
  "duration": 4161199869,
  "status": "passed"
});
formatter.scenario({
  "id": "home-page-functionality;only-10-top-sellers-should-be-shown",
  "description": "",
  "name": "Only 10 top sellers should be shown",
  "keyword": "Scenario",
  "line": 35,
  "type": "scenario",
  "comments": [
    {
      "value": "#    Functional scenarios",
      "line": 33
    }
  ]
});
formatter.step({
  "name": "consumer is in homepage \"https://www.zencart.com\"",
  "keyword": "Given ",
  "line": 36
});
formatter.step({
  "name": "the home page should show only top 10  best sellers products preview",
  "keyword": "Then ",
  "line": 37
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.zencart.com",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefinition.consumer_is_in_homepage(String)"
});
formatter.result({
  "duration": 2800380537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "HomePageStepDefinition.the_home_page_should_show_only_top_best_sellers_products_preview(int)"
});
formatter.result({
  "duration": 237853875,
  "status": "failed",
  "error_message": "org.openqa.selenium.InvalidSelectorException: The given selector xpath for the products list table is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression xpath for the products list table because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nCommand duration or timeout: 237 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027Sasikala-PC\u0027, ip: \u0027192.168.1.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: f5018b50-2f45-4af7-a30c-aae6db35ae89\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dXP, databaseEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, javascriptEnabled\u003dtrue, acceptSslCerts\u003dtrue, handlesAlerts\u003dtrue, browserName\u003dfirefox, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d31.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:377)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:453)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:340)\r\n\tat cucumberjvm.HomePageStepDefinition.elements_list(HomePageStepDefinition.java:225)\r\n\tat cucumberjvm.HomePageStepDefinition.the_home_page_should_show_only_top_best_sellers_products_preview(HomePageStepDefinition.java:102)\r\n\tat ✽.Then the home page should show only top 10  best sellers products preview(src/test/resources/cucumberjvm/HomePage.feature:37)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: The given selector xpath for the products list table is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression xpath for the products list table because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027Sasikala-PC\u0027, ip: \u0027192.168.1.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.annotateInvalidSelectorError_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous7509299171115831268webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9444:5)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementsInternal_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous7509299171115831268webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9502:5)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElements(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous7509299171115831268webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9506:3)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous7509299171115831268webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11455:16)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous7509299171115831268webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11460:7)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous7509299171115831268webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11402:5)\r\n"
});
formatter.after({
  "duration": 260228715,
  "status": "passed"
});
formatter.before({
  "duration": 4270819761,
  "status": "passed"
});
formatter.scenario({
  "id": "home-page-functionality;showing-the-price-with-default-currency",
  "description": "",
  "name": "Showing the price with default currency",
  "keyword": "Scenario",
  "line": 39,
  "type": "scenario"
});
formatter.step({
  "name": "consumer is in homepage \"https://www.zencart.com\"",
  "keyword": "Given ",
  "line": 40
});
formatter.step({
  "name": "the home page should show only top 10  best sellers products preview",
  "keyword": "Then ",
  "line": 41
});
formatter.step({
  "name": "consumer navigates to a product by selecting the link of a product",
  "keyword": "When ",
  "line": 42
});
formatter.step({
  "name": "the product page of the selected product should be shown",
  "keyword": "Then ",
  "line": 43
});
formatter.step({
  "name": "price of the product should be shown in default currency \"Euro\"",
  "keyword": "And ",
  "line": 44
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.zencart.com",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefinition.consumer_is_in_homepage(String)"
});
formatter.result({
  "duration": 4294438217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "HomePageStepDefinition.the_home_page_should_show_only_top_best_sellers_products_preview(int)"
});
formatter.result({
  "duration": 154620793,
  "status": "failed",
  "error_message": "org.openqa.selenium.InvalidSelectorException: The given selector xpath for the products list table is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression xpath for the products list table because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nCommand duration or timeout: 153 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027Sasikala-PC\u0027, ip: \u0027192.168.1.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: 43585596-27e6-475b-9813-4bc08992d798\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dXP, databaseEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, javascriptEnabled\u003dtrue, acceptSslCerts\u003dtrue, handlesAlerts\u003dtrue, browserName\u003dfirefox, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d31.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:377)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:453)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:340)\r\n\tat cucumberjvm.HomePageStepDefinition.elements_list(HomePageStepDefinition.java:225)\r\n\tat cucumberjvm.HomePageStepDefinition.the_home_page_should_show_only_top_best_sellers_products_preview(HomePageStepDefinition.java:102)\r\n\tat ✽.Then the home page should show only top 10  best sellers products preview(src/test/resources/cucumberjvm/HomePage.feature:41)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: The given selector xpath for the products list table is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression xpath for the products list table because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027Sasikala-PC\u0027, ip: \u0027192.168.1.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.annotateInvalidSelectorError_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous1186032304690085350webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9444:5)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementsInternal_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous1186032304690085350webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9502:5)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElements(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous1186032304690085350webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9506:3)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous1186032304690085350webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11455:16)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous1186032304690085350webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11460:7)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous1186032304690085350webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11402:5)\r\n"
});
formatter.match({
  "location": "HomePageStepDefinition.consumer_navigates_to_a_product_by_selecting_the_link_of_a_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefinition.the_product_page_of_the_selected_product_should_be_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 58
    }
  ],
  "location": "HomePageStepDefinition.price_of_the_product_should_be_shown_in_default_currency(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 250069610,
  "status": "passed"
});
formatter.before({
  "duration": 4103698098,
  "status": "passed"
});
formatter.scenario({
  "id": "home-page-functionality;no-categories-available",
  "description": "",
  "name": "No categories available",
  "keyword": "Scenario",
  "line": 46,
  "type": "scenario"
});
formatter.step({
  "name": "consumer is in homepage \"https://www.zencart.com\"",
  "keyword": "Given ",
  "line": 47
});
formatter.step({
  "name": "no categories  are available",
  "keyword": "When ",
  "line": 48
});
formatter.step({
  "name": "a message should be shown saying \"No categories available to display\"",
  "keyword": "Then ",
  "line": 49
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.zencart.com",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefinition.consumer_is_in_homepage(String)"
});
formatter.result({
  "duration": 3664028908,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.no_categories_are_available()"
});
formatter.result({
  "duration": 142446556,
  "status": "failed",
  "error_message": "org.openqa.selenium.InvalidSelectorException: The given selector xpath for category table is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression xpath for category table because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nCommand duration or timeout: 142 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027Sasikala-PC\u0027, ip: \u0027192.168.1.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: b34244fa-ef47-4ab7-91d6-285b971fa99b\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dXP, databaseEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, javascriptEnabled\u003dtrue, acceptSslCerts\u003dtrue, handlesAlerts\u003dtrue, browserName\u003dfirefox, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d31.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:377)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:453)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:340)\r\n\tat cucumberjvm.HomePageStepDefinition.elements_list(HomePageStepDefinition.java:225)\r\n\tat cucumberjvm.HomePageStepDefinition.no_categories_are_available(HomePageStepDefinition.java:135)\r\n\tat ✽.When no categories  are available(src/test/resources/cucumberjvm/HomePage.feature:48)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: The given selector xpath for category table is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression xpath for category table because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027Sasikala-PC\u0027, ip: \u0027192.168.1.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.annotateInvalidSelectorError_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous4337248827153739437webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9444:5)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementsInternal_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous4337248827153739437webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9502:5)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElements(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous4337248827153739437webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9506:3)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous4337248827153739437webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11455:16)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous4337248827153739437webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11460:7)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous4337248827153739437webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11402:5)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "No categories available to display",
      "offset": 34
    }
  ],
  "location": "HomePageStepDefinition.a_message_should_be_shown_saying(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 284592360,
  "status": "passed"
});
formatter.before({
  "duration": 4242581137,
  "status": "passed"
});
formatter.scenario({
  "id": "home-page-functionality;category-with-no-items",
  "description": "",
  "name": "Category with no items",
  "keyword": "Scenario",
  "line": 51,
  "type": "scenario"
});
formatter.step({
  "name": "consumer is in homepage \"https://www.zencart.com\"",
  "keyword": "Given ",
  "line": 52
});
formatter.step({
  "name": "a category named \"Photo Frames\" exists with no items available",
  "keyword": "When ",
  "line": 53
});
formatter.step({
  "name": "the category should be shown with zero items besides the category name",
  "keyword": "Then ",
  "line": 54
});
formatter.step({
  "name": "the category \"Photo Frames\" should not be a link",
  "keyword": "And ",
  "line": 55
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.zencart.com",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefinition.consumer_is_in_homepage(String)"
});
formatter.result({
  "duration": 2663609907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Photo Frames",
      "offset": 18
    }
  ],
  "location": "HomePageStepDefinition.a_category_named_exists_with_no_items_available(String)"
});
formatter.result({
  "duration": 138042805,
  "status": "failed",
  "error_message": "org.openqa.selenium.InvalidSelectorException: The given selector Photo Frames is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression Photo Frames because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nCommand duration or timeout: 137 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027Sasikala-PC\u0027, ip: \u0027192.168.1.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: 08e38a60-db00-428f-add5-c12b961acfcd\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dXP, databaseEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, javascriptEnabled\u003dtrue, acceptSslCerts\u003dtrue, handlesAlerts\u003dtrue, browserName\u003dfirefox, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d31.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat cucumberjvm.HomePageStepDefinition.a_category_named_exists_with_no_items_available(HomePageStepDefinition.java:147)\r\n\tat ✽.When a category named \"Photo Frames\" exists with no items available(src/test/resources/cucumberjvm/HomePage.feature:53)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: The given selector Photo Frames is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression Photo Frames because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027Sasikala-PC\u0027, ip: \u0027192.168.1.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.annotateInvalidSelectorError_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous4482030251243080865webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9444:5)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous4482030251243080865webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9475:5)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous4482030251243080865webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9479:3)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous4482030251243080865webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11455:16)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous4482030251243080865webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11460:7)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/Sasikala/AppData/Local/Temp/anonymous4482030251243080865webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11402:5)\r\n"
});
formatter.match({
  "location": "HomePageStepDefinition.the_category_should_be_shown_with_zero_items_besides_the_category_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Photo Frames",
      "offset": 14
    }
  ],
  "location": "HomePageStepDefinition.the_category_should_not_be_a_link(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 263051506,
  "status": "passed"
});
formatter.before({
  "duration": 4176292835,
  "status": "passed"
});
formatter.scenario({
  "id": "home-page-functionality;sorting-order-of-categories",
  "description": "",
  "name": "Sorting order of categories",
  "keyword": "Scenario",
  "line": 57,
  "type": "scenario"
});
formatter.step({
  "name": "consumer is in homepage \"https://www.zencart.com\"",
  "keyword": "Given ",
  "line": 58
});
formatter.step({
  "name": "list of categories exists in the left panel",
  "keyword": "When ",
  "line": 59
});
formatter.step({
  "name": "the list of categories should be shown in Alphabetical order of the category name",
  "keyword": "Then ",
  "line": 60
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.zencart.com",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefinition.consumer_is_in_homepage(String)"
});
formatter.result({
  "duration": 2843039672,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.list_of_categories_exists_in_the_left_panel()"
});
formatter.result({
  "duration": 60188882503,
  "status": "failed",
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat cucumberjvm.HomePageStepDefinition.list_of_categories_exists_in_the_left_panel(HomePageStepDefinition.java:51)\r\n\tat ✽.When list of categories exists in the left panel(src/test/resources/cucumberjvm/HomePage.feature:59)\r\n"
});
formatter.match({
  "location": "HomePageStepDefinition.the_list_of_categories_should_be_shown_in_Alphabetical_order_of_the_category_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 275981194,
  "status": "passed"
});
formatter.before({
  "duration": 4229560420,
  "status": "passed"
});
formatter.scenario({
  "id": "home-page-functionality;maximum-categories-shown-are-only-10",
  "description": "",
  "name": "Maximum categories shown are only 10",
  "keyword": "Scenario",
  "line": 62,
  "type": "scenario"
});
formatter.step({
  "name": "consumer is in homepage \"https://www.zencart.com\"",
  "keyword": "Given ",
  "line": 63
});
formatter.step({
  "name": "list of categories exists in the left panel",
  "keyword": "When ",
  "line": 64
});
formatter.step({
  "name": "only 10 categories should be shown",
  "keyword": "Then ",
  "line": 65
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.zencart.com",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefinition.consumer_is_in_homepage(String)"
});
formatter.result({
  "duration": 4923056843,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.list_of_categories_exists_in_the_left_panel()"
});
formatter.result({
  "duration": 60322791074,
  "status": "failed",
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat cucumberjvm.HomePageStepDefinition.list_of_categories_exists_in_the_left_panel(HomePageStepDefinition.java:51)\r\n\tat ✽.When list of categories exists in the left panel(src/test/resources/cucumberjvm/HomePage.feature:64)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 5
    }
  ],
  "location": "HomePageStepDefinition.only_categories_should_be_shown(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 265343296,
  "status": "passed"
});
formatter.before({
  "duration": 4174904197,
  "status": "passed"
});
formatter.scenario({
  "id": "home-page-functionality;maximum-size-of-the-name-of-the-category",
  "description": "",
  "name": "Maximum size of the name of the category",
  "keyword": "Scenario",
  "line": 67,
  "type": "scenario"
});
formatter.step({
  "name": "consumer is in homepage \"https://www.zencart.com\"",
  "keyword": "Given ",
  "line": 68
});
formatter.step({
  "name": "list of categories exists in the left panel",
  "keyword": "When ",
  "line": 69
});
formatter.step({
  "name": "size of the name of the category should be less than 36 characters",
  "keyword": "Then ",
  "line": 70
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.zencart.com",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefinition.consumer_is_in_homepage(String)"
});
formatter.result({
  "duration": 4796042827,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.list_of_categories_exists_in_the_left_panel()"
});
formatter.result({
  "duration": 60309415165,
  "status": "failed",
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat cucumberjvm.HomePageStepDefinition.list_of_categories_exists_in_the_left_panel(HomePageStepDefinition.java:51)\r\n\tat ✽.When list of categories exists in the left panel(src/test/resources/cucumberjvm/HomePage.feature:69)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "36",
      "offset": 53
    }
  ],
  "location": "HomePageStepDefinition.size_of_the_name_of_the_category_should_be_less_than_characters(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 267183509,
  "status": "passed"
});
formatter.before({
  "duration": 4142662527,
  "status": "passed"
});
formatter.scenario({
  "id": "home-page-functionality;category-panel-should-be-scrollable-when-name-exceeds-20-characters",
  "description": "",
  "name": "Category panel should be scrollable when name exceeds 20 characters",
  "keyword": "Scenario",
  "line": 72,
  "type": "scenario"
});
formatter.step({
  "name": "consumer is in homepage \"https://www.zencart.com\"",
  "keyword": "Given ",
  "line": 73
});
formatter.step({
  "name": "list of categories exists in the left panel",
  "keyword": "When ",
  "line": 74
});
formatter.step({
  "name": "a category \"name\" exceeding 20 characters exists",
  "keyword": "And ",
  "line": 75
});
formatter.step({
  "name": "the category panel should be scrollable",
  "keyword": "Then ",
  "line": 76
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.zencart.com",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefinition.consumer_is_in_homepage(String)"
});
formatter.result({
  "duration": 3018739927,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.list_of_categories_exists_in_the_left_panel()"
});
formatter.result({
  "duration": 60174155438,
  "status": "failed",
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat cucumberjvm.HomePageStepDefinition.list_of_categories_exists_in_the_left_panel(HomePageStepDefinition.java:51)\r\n\tat ✽.When list of categories exists in the left panel(src/test/resources/cucumberjvm/HomePage.feature:74)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "20",
      "offset": 28
    }
  ],
  "location": "HomePageStepDefinition.a_category_exceeding_characters_exists(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefinition.the_category_panel_should_be_scrollable()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 279703121,
  "status": "passed"
});
});