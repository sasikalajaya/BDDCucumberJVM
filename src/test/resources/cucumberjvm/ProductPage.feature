Feature: Product Page Functionality

  As a consumer
  I want to view the product's details
  so that I can make a choice

  Background:
    Given consumer is in homepage "https://www.zencart.com"
      And consumer logs in as username "Miller" and password "miller"
      And consumer searches for a product "Apple Iphone 5S"

  Scenario : Consumer can always view the mandatory fields of the product in the product page
    Given consumer is in the product "Apple Iphone 5S" page
     Then title "Apple Iphone 5S" of the product should be displayed at the top of the page
      And consumer should see product price in default currency "Euro"
      And default product quantity should be defined as 1
      And description of the product should be displayed below the products image

  Scenario: Consumer can view optional fields of the product in the product page
    Given consumer is in the product "Apple Iphone 5S" page
     Then consumer should see the product image
      And consumer should see the product model
      And consumer should see available units of the product

  Scenario: Display the date when product is added
    Given consumer is in the product "Apple Iphone 5S" page
      And the product has date added to the system
     Then consumer should see date in the default "dd/mm/yyyy" format

  Scenario: Consumer can write review for a product
    Given consumer is in the product "Apple Iphone 5S" page
     Then consumer should see the write review option for the product
     When consumer chooses to write review for the product
     Then the review screen should be shown
     When consumer types the "review" and submits
     Then a message "Your reviews have been submitted successfully" should be shown

  Scenario: Consumer can add the item into cart
   Given consumer is in the product "Apple Iphone 5S" page
    Then consumer should see Add to Cart option for the product
     And default product quantity should be defined as 1
    When consumer enters the quantity  as 3
     And consumer adds the product to the cart
    Then consumer should see the a message "items added to your cart successfully"

  Scenario: user can manipulate the quantity
   Given consumer is in the product "Apple Iphone 5S" page
    Then default product quantity should be defined as 1
    When consumer enters the quantity  as 5
    Then consumer should see the quantity changed to 5
  //Functional scenarios



  image should zoom in available image and should have close button to close

  user should not be able zoom in default image

  when the quantity set as zero and decimals try to add to the cart should through a message

  user wrote a review and changed his mind

  user cannot write more than 200 words in review

  when the product is added date should be displayed

  Title of the browser should same as the product title

  If the product is not in stock the message should be "Not in Stock"

  If the stock is shown and if try to order more than what is in stock it should error message while adding to cart
