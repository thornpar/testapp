# Game of Thrones list application
This is a very small application that enables you to see a list of Game of Thrones characters.

The application can do 3 things :
* You can display a list of Game of Thrones characters 
* You can search for Game of Thrones characters 
* You can click on a character and see more information. 

Your job is to write protractor tests for this application.

# Get things up and running
* Download and install node.js(version on my computer is 4.4.5 but should probably work with other versions)
* Clone this repository
* npm install
* Start the webserver by writing : npm start
* The site should be running now on http://localhost:3000

# To start the tests
* npm install protractor -g
* Open another console, run webdriver-manager update
* Start the webdriver by writing : webdriver-manager start --standalone
* Open another console and run the tests (it should be 3) by writing : protractor test/conf.js

# Write some tests
 In the test folder you will find a protractor config file (conf.js), a pageobject file and some testfiles. The index.spec.js file contains some simple tests so you have something to get you going.
 
 Write some more tests that you think will be appropriate to ensure this very useful site can keep its high standards.
 
# How to submit
Publish this project along with your fresh tests on your own github account and send the github link to us.
