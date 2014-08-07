Feature: Product Page Functionality

  As a consumer
  I want to view the product's details
  so that I can make a choice

  Scenario: Consumer can always view the mandatory fields of the product in the product page
    Given user is in the product page
     Then title of the product should be displayed at the top of the page
      And user should see product's price in default currency "Euro"
      And default product quantity should be defined as one
      And description of the product should be displayed below the product's image

  Scenario: Consumer can view optional fields of the product in the product page
    Given user is in product page
     Then user should see Image
      And user should see model
      And user should see available units

  Scenario: Display the date when product is added
    Given user is in product page
     When a product with
     Then user should see Image


  user can write review on a product

  user can add the item into cart

  //Functional scenarios

  user can manipulate the quantity

  image should zoom in available image and should have close button to close

  user should not be able zoom in default image

  when the quantity set as zero and decimals try to add to the cart should through a message

  user wrote a review and changed his mind

  user cannot write more than 200 words in review

  when the product is added date should be displayed

  Title of the browser should same as the product title

  If the product is not in stock the message should be "Not in Stock"

  If the stock is shown and if try to order more than what is in stock it should error message while adding to cart
