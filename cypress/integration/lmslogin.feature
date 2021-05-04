Feature: Tester login

    I want to test Lms login page  

    Scenario: login page title  

    Given I Navigate to the Website
    And   Validate the page title
    

    
    Scenario: Login as a tester 

    Given I Navigate to the Website
    And   I enter the username
    And   I enter the password 
    And   I click on login page 


     Scenario: create partner

    And   I click on hierarchy
    And   I click on partner 
    And   I click on add new club button 
    And   I Enter partner name
    And   I Enter partner reference name
    And   I scroll page to select hierarchy
    And   I click on checkbutton
    And   I click on create button