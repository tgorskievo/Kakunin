Feature: Navigation
    As a kakunin user
    I want to navigate to selected page

    Scenario: Navigate by link click
        Given I visit the "main" page
        When I click the "formLink" element
        Then the "simpleForm" page is displayed
        And the "form" element is visible

    Scenario: Navigate to parametrized url
        Given I visit the "navigationPages" page with parameters:
            | pageId | myPageId    |
            | title  | myPageTitle |
        Then there is element "pageId" with value "t:myPageId"
        And there is element "title" with value "t:myPageTitle"

    Scenario: Navigate to parametrized url with query string 
        Given I visit the "navigationPages" page with parameters:
            | pageId | myPageId    |
            | title  | myPageTitle |
            | queryParam1 | value1 |
            | queryParam2 | value2 |
        Then there is element "pageId" with value "t:myPageId"
        And there is element "title" with value "t:myPageTitle"    
        And there is element "queryParam1" with value "t:value1"    
        And there is element "queryParam2" with value "t:value2"    
