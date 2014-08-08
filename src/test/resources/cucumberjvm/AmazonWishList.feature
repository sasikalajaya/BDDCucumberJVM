#Project : Amazon Wishlist maintanance

Feature: Create wishlist by category
  As an online shopper
  In order to keep track of my wishlist
  I want to create more than one wishlist so that I can add items to appropriate wishlist category

  @NewWishList
  Scenario Outline: Create mutilple wishlist by category/name

    Given I am in the amazon homepage "http://frontend.smartstore.net/en/login"
     When I filled the credentials as below:
      | username | password |
      | Miller   | Miller123|
     Then I should be in my customised home page
     When I clicked the Wish List drop down in the top right hand corner of the homepage
     And  I selected Create another WishList
     And  I filled <Category> in the wishlist "Title"
     And  I clicked Ok
    Then  I should see the newly created wishlist <Category> in the left pane under "your wishlists"

  Examples:
  | Category       |
  | Books          |
  | Electronics    |
  | Entertainment  |
  | Hubby wishlist |

  @duplicateWishlist
  Scenario Outline: Duplicate Wishlist category/name

    Given  I am logged on to amazon site
      And  I already have a wish list  named :
      | Category        |
      | Books           |
      | Electronics     |
      | Entertainment   |
      | Hubby wishlist  |

      And  I clicked the "Wish List " in the top right hand corner of the homepage
      And  I selected "Create another WishList" from the drop down menu
     When  I filled <Category> in the wishlist "Title"
      And  I clicked "Ok"
     Then  I should see a  message saying " wishlist <Category>  already present" for duplicate wishlistname
      But  I should see the newly created wishlist <Category> in the left pane under "your wishlists"

  Examples:
  | Category       |
  | Books          |
  | Music          |



  @additems @specifyquantity

  Scenario Outline: Add items to a wishlist category with quantity
    Given I am logged on to my account
    And  I have a wishlist named:
      | Category    |
      | Books       |
      | Overall List|
    And     I "searched" for a book called "The Cucumber Books by Matt Wynee"
   Then     I should see the book listed in the screen
   When     I clicked on the book
    And     I clicked "Add to WishList " drop dowm
    And     I selected <Category> wishlist
    And     I entered <Quantity> required
   Then     I should see the item with the quantity <Quantity> in a new screen added to my <Category> wishList

  Examples:

  | Category      | Quantity |
  | Books         | 2        |
  | Overall List  | 2        |


  @DeleteItems

  Scenario Outline: Remove items from a wishlist category
    Given I am logged on to my account
     And  I have a wishlist named
      | Category    |
      | Books       |
      | Overall List|

    When     I clicked <Category>  wishList"
    Then     I should see items in the wishlist and <OldQuantity> items under the category
    When     I entered <Quantity>
     And     I clicked Save
    Then     I should see the <nQuantity> for the items in my <Category> wishlist
    When     I clicked Remove from the wishlist
    Then     I should not see the items in my wishlist

  Examples:

    | Category      | OldQuantity | Quantity  | nQuantity  |
    | Books         | 4           | 2         |  2         |
    | Overall List  | 12          | 10        |  2         |
