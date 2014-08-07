Feature: Home page functionality

  As a consumer
  I want to view the homepage to understand about the website
  so that I can shop easily

# acceptance scenarios

  Scenario: Consumer can view the list of categories and navigate to a specific category

   Given consumer is in homepage "https://www.zencart.com"
    When list of categories exists in the left panel
    Then number of items available per category should be shown beside the category name
     And a category named "Books" exists
    When consumer opens the category named "Books"
    Then the list of products under the category "Books" should be shown
     And the number of products shown should match the available items for the chosen category

  Scenario: Consumer can view the top 10 best seller products preview and navigate to a product detail screen by selecting the product image

   Given consumer is in homepage "https://www.zencart.com"
    Then the home page should show only top 10  best sellers products preview
    When consumer navigates to a product by selecting the image of a product
    Then the product page of the selected product should be shown

  Scenario: Consumer can view the top 10 best seller products preview and navigate to a product detail screen by selecting the link

   Given consumer is in homepage "https://www.zencart.com"
    Then the home page should show only top 10  best sellers products preview
    When consumer navigates to a product by selecting the link of a product
    Then the product page of the selected product should be shown

#    Functional scenarios

  Scenario: Only 10 top sellers should be shown
   Given consumer is in homepage "https://www.zencart.com"
    Then the home page should show only top 10  best sellers products preview

  Scenario: Showing the price with default currency
   Given consumer is in homepage "https://www.zencart.com"
    Then the home page should show only top 10  best sellers products preview
    When consumer navigates to a product by selecting the link of a product
    Then the product page of the selected product should be shown
    And  price of the product should be shown in default currency "Euro"

  Scenario: No categories available
   Given consumer is in homepage "https://www.zencart.com"
    When no categories  are available
    Then a message should be shown saying "No categories available to display"

  Scenario: Category with no items
   Given consumer is in homepage "https://www.zencart.com"
    When a category named "Photo Frames" exists with no items available
    Then the category should be shown with zero items besides the category name
     And the category "Photo Frames" should not be a link

  Scenario: Sorting order of categories
   Given consumer is in homepage "https://www.zencart.com"
    When list of categories exists in the left panel
    Then the list of categories should be shown in Alphabetical order of the category name

  Scenario: Maximum categories shown are only 10
   Given consumer is in homepage "https://www.zencart.com"
    When list of categories exists in the left panel
    Then only 10 categories should be shown

  Scenario: Maximum size of the name of the category
   Given consumer is in homepage "https://www.zencart.com"
    When list of categories exists in the left panel
    Then size of the name of the category should be less than 36 characters

  Scenario: Category panel should be scrollable when name exceeds 20 characters
   Given consumer is in homepage "https://www.zencart.com"
    When list of categories exists in the left panel
     And a category "name" exceeding 20 characters exists
    Then the category panel should be scrollable